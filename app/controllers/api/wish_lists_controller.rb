class Api::WishListsController < ApplicationController
  

  def index
    @wish_lists = WishList.all.where(author_id: current_user)
    render :index
  end

  def create
  end

  def destroy
  end

  def show
    @wish_list = WishList.find params[:id]
    render :show
  end

  private 

  def params
    params.require(:wishList).permit(:title, :author_id, :genre)
  end
end