class TodoCell < Cell::ViewModel
  property :description

  def form
    render
  end

  def show
    render
  end

  def list
    @items = options[:items]
    render
  end

end
