cube = File.read('assets/cube.txt')

# Split the layers into arrays and reverse them so that
# bottom layer's J letter is at 0, 0, 0.
layers = cube.
  split(/\n\n/).
  map { |layer|
    layer.split(/\n/).
    reverse
  }.
  reverse

File.open("assets/cube.json", "w") { |f| f << layers.inspect }
