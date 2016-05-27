class TodoContainerCell < Cell::ViewModel
  include ReactOnRailsHelper

  def show
    @new_todo = Todo.new
    @items = Todo.order("created_at DESC").all
    @todo_props = { items: @items }
    render
  end

end
