class DashController < ApplicationController
  def index
    @items = Todo.order("created_at DESC").all
  end
end
