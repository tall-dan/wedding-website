# frozen_string_literal: true

require 'google/apis/drive_v3'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'fileutils'
require_relative './google_auth'

class GoogleDrive
  include GoogleAuth

  def initialize
    @g_service = Google::Apis::DriveV3::DriveService.new
    @application_name = 'Wedding website drive manager'
    @scope = Google::Apis::DriveV3::AUTH_DRIVE
  end

  def favor_template
    @favor_template ||= find_by_name('favor_template').files[0]
  end

  def docs_folder
    @docs_folder ||= find_by_name('docs', 'application/vnd.google-apps.folder').files[0]
  end

  def pics_folder
    @pics_folder ||= find_by_name('pics', 'application/vnd.google-apps.folder').files[0]
  end

  def copy_template_into_docs_folder(guest)
    template_id = favor_template.id
    folder_id = docs_folder.id
    copy(template_id, name: guest.favor_filename, parents: [folder_id])
  end

  def find_by_name(name, mime_type = 'application/vnd.google-apps.document')
    name_query = "name='#{name}'"
    type_query = "mimeType='#{mime_type}'" if mime_type.present?
    service.list_files(q: [name_query, type_query].compact.join(' and '))
  end

  def copy(from_id, **file_attrs)
    service.copy_file(from_id, Google::Apis::DriveV3::File.new(file_attrs))
  end

  def move_to_docs_folder(file_id)
    current_parents = service.get_file(file_id, fields: '*').parents.join(',')
    service.update_file(file_id, add_parents: docs_folder.id, remove_parents: current_parents)
  end

  def clean_by_name(name, _mime_type = 'application/vnd.google-apps.document')
    find_by_name(name).files.map { |file| service.delete_file(file.id) }
  end

  def upload_image_to_pics_dir(image)
    file = Google::Apis::DriveV3::File.new(parents: [pics_folder.id], name: image)
    service.create_file(file, upload_source: image)
  end
end
