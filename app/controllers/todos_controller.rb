class TodosController < ApplicationController
  def create
    @todo = Todo.create(description: params[:description], complete: false)
    result = {
      description: @todo.description,
      id: @todo.id
    }
    render :json => result
  end
end
