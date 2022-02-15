path = './public/photo_gallery/'
outfile = "#{path}metadata.js"

metadata_js = Dir["#{path}*.jpg"].each_with_object("export const metadata = {\n") do |filename, metadata|
  file_metadata = `mdls #{filename}`
  comments = file_metadata[/.*kMDItemFinderComment\s*=\s*"(.*)"/,1]
  metadata << "  '#{filename.gsub(path, '')}': '#{comments}',\n"
end << '}'

File.write(outfile, metadata_js)
