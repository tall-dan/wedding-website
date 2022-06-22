# frozen_string_literal: true

task create_favors: :environment do
  require 'sheet_readers/guest_reader'
  require 'reconciler'
  require 'google_drive'
  require 'google_doc'
  drive = GoogleDrive.new
  Guest.includes(:invites).where(
    invites: { event_id: Event.reception, status: 'accepted' }
  ).order(:last_name).each do |guest|
    table = guest.reception_invite.table_number
    puts guest.display_name
    next if table.blank?

    drive.clean_by_name(guest.favor_filename)

    new_doc = drive.copy_template_into_docs_folder(guest)
    GoogleDoc.new(new_doc.id, guest).customize!(table)
    `open https://docs.google.com/document/d/#{new_doc.id}`
    sleep(10)
    `screenshot Chrome -f screenshot.png`
    chrome_pid = `ps aux | grep "Chrome" | grep -Ev "Helper|grep"`.split(' ')[1]
    `kill #{chrome_pid}`
    `convert screenshot.png -crop 900x220+1200+1050 untrimmed.png`
    `convert untrimmed.png -trim #{guest.favor_filename}.png`
    drive.upload_image_to_pics_dir("#{guest.favor_filename}.png")
  end
end
