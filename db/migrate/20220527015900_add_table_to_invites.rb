# frozen_string_literal: true

class AddTableToInvites < ActiveRecord::Migration[6.1]
  def change
    add_column :invites, :table_number, :string
  end
end
