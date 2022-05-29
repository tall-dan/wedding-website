# frozen_string_literal: true

task create_favors: :environment do
  # read rows, filter for guests who have accepted
  # for each row (guest):
  #   copy the template to that guest's doc (name: guest-name-guest-id)
  #   customize the guest doc
  #   move it to some shared folder, or share it with dan.w.schepers
  #   `open` the doc, and then take a screenshot of it
  #     `screenshot Chrome -f timestamp-guest-name-guest-id`
  #     upload screenshot to drive (again, folder shared w/ dan.w.schepers
  #       probs not the same folder

  require 'sheet_readers/guest_reader'
  require 'reconciler'
  require 'google_drive'
  require 'google_doc'
  drive = GoogleDrive.new
  Reconciler.new.rows.map do |guest|
    drive.clean_by_name(guest.favor_filename)
    new_doc = drive.copy_template_into_docs_folder(guest)
    GoogleDoc.new(new_doc.id, guest).customize!
    `open https://docs.google.com/document/d/#{new_doc.id}`
    `screenshot Chrome -f screenshot.png`
    `convert screenshot.png -crop 900x220+1200+780 #{guest.favor_filename}.png`
    drive.upload_image_to_pics_dir("#{guest.favor_filename}.png")
    # upload screenshot to pics dir
  end
end
