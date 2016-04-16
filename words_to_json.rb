require 'rubygems'
require 'json'

jsonFilepath = 'assets/words.json'

exit if File.exist?(jsonFilepath)

words = File.open('assets/words.txt', &:read)

File.open(jsonFilepath, 'w') { |f|
  f << JSON.generate(words.split(/\n/))
}
