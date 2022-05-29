# frozen_string_literal: true

# SCOPE = Google::Apis::DocsV1::AUTH_DOCUMENTS
require 'google/apis/docs_v1'

class GoogleDoc
  include GoogleAuth
  attr_reader :doc_id, :guest

  def initialize(doc_id, guest)
    @doc_id = doc_id
    @guest = guest
    @g_service = Google::Apis::DocsV1::DocsService.new
    @application_name = 'Guest Doc Reader'
    @scope = Google::Apis::DocsV1::AUTH_DOCUMENTS
  end

  def doc
    @doc ||= service.get_document(doc_id)
  end

  def customize!
    edits = ['- FirstName, LastName-', '-Number-'].zip([guest.name, guest.table]).map do |current, new|
      Google::Apis::DocsV1::Request.new(
        replace_all_text: Google::Apis::DocsV1::ReplaceAllTextRequest.new(
          contains_text: Google::Apis::DocsV1::SubstringMatchCriteria.new(text: current, match_case: true),
          replace_text: new
        )
      )
    end
    service.batch_update_document(doc_id, Google::Apis::DocsV1::BatchUpdateDocumentRequest.new(requests: edits))
  end
end
