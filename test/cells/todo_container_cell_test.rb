require 'test_helper'

class TodoContainerCellTest < Cell::TestCase
  test "show" do
    html = cell("todo_container").(:show)
    assert html.match /<p>/
  end


end
