class TodoContainerCell < Cell::ViewModel
  def show
    @new_todo = Todo.new
    @items = Todo.order("created_at DESC").all
    render
  end

end
