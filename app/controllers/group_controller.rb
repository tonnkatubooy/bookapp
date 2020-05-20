class GroupController < ApplicationController
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    binding.pry
  end
  
end
