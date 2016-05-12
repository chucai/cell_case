class DashController < ApplicationController
  def index
    @todos = Todo.order("created_at DESC").all
  end
end
