class TodosController < ApplicationController
  def create
    @todo = Todo.create(description: params[:description], complete: false)
  end
end
