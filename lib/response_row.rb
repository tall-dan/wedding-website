# frozen_string_literal: true

class ResponseRow
  class << self
    # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    def init(attributes)
      @struct = Struct.new(*attributes.map { |attr| attr.downcase.gsub(' ', '_').to_sym }) do
        def calculate_sha
          Base64.urlsafe_encode64(intrinsic_values.to_json)
        end

        def attributes_from_sha
          JSON.parse(Base64.urlsafe_decode64(sha))
        end

        def intrinsic_values
          (members - [:sha]).map { |attr| send(attr) }
        end

        def to_a
          intrinsic_values + [calculate_sha]
        end
      end
    end
    # rubocop:enable Metrics/AbcSize, Metrics/MethodLength

    def wrap(data)
      @struct.new(*transform_data(data))
    end

    # make our data consistent with the way excel formats it
    def transform_data(data)
      data.each_with_object([]) do |datum, collection|
        if datum == false
          collection.append('FALSE')
        elsif datum == true
          collection.append('TRUE')
        else
          collection.append(datum.to_s)
        end
      end
    end
  end
end
