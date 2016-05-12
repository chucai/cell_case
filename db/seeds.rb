
20.times do |i|
  Todo.create(description: "item #{i}", complete: false)
end
