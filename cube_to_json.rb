jsonFilepath = 'assets/cube.json'

exit if File.exist?(jsonFilepath)

cube = File.read('assets/cube.txt')

# Split the layers into arrays and reverse them so that
# bottom layer's J letter is at 0, 0, 0. Downcase the
# letters because the word list does not contain uppercase
# letters.
layers = cube.
  downcase.
  split(/\n\n/).
  map { |layer|
    layer.split(/\n/).
    reverse
  }.
  reverse

File.open(jsonFilepath, 'w') { |f| f << layers.inspect }
