require 'test_helper'

class TodoCellTest < Cell::TestCase
  test "show" do
    html = cell("todo").(:show)
    assert html.match /<p>/
  end


end
