require 'rubygems'
require 'json'

cubeJsonFilepath = 'assets/cube.json'
wordsJsonFilepath = 'assets/words.json'

exit if File.exist?(cubeJsonFilepath) && File.exist?(wordsJsonFilepath)

def read(filepath)
  File.read(filepath).
    gsub("\xEF\xBB\xBF", '') # Remove BOM
end

def write(filepath, contents)
  File.open(filepath, 'w') { |f| f << contents }
end

# Split the layers into arrays and reverse them so that
# bottom layer's J letter is at 0, 0, 0. Downcase the
# letters because the word list does not contain uppercase
# letters.
def to_layers(cube)
  cube.
    downcase.
    split(/\n\n/).
    map { |layer|
      layer.split(/\n/).
      reverse
    }.
    reverse

end

def to_words(words)
  words.split(/\n/)
end

def unique_chars(layers)
  layers.
    flatten.
    join('').
    split('').
    uniq
end

# Words which have characters in them that are not
# appearing in the cube are invalid and should not
# be stored into words.json. Better to get rid of
# them here than on runtime.
def valid_words(layers, words)

  unique_layer_chars = unique_chars(layers)

  contais_invalid_chars = lambda { |word|
    !word.
      split('').
      all? { |word_char|
        unique_layer_chars.include?(word_char)
      }
  }

  words.reject(&contais_invalid_chars)

end

layers = to_layers(read('assets/cube.txt'))
words = to_words(read('assets/words.txt'))
valid_words = valid_words(layers, words)

write(cubeJsonFilepath, JSON.generate(layers))
write(wordsJsonFilepath, JSON.generate(valid_words))

puts "Generated #{cubeJsonFilepath} and #{wordsJsonFilepath}. Read #{words.size} words total. Saved #{valid_words.size} words which had valid letters."
