class TodosController < ApplicationController
  def create
    @todo = Todo.create(description: params[:description], complete: false)
    redirect_to root_path
  end
end
