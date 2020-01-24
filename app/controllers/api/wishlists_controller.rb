class Api::WishlistsController < ApplicationController
  

  def index
    wishlists = Wishlist.all.where(author_id: current_user)
    @wishlists = wishlists.includes(:books)
    render :index
  end

  def create
    @wishlist = Wishlist.create!(wish_list_params)
    render :show
  end

  def destroy
  end

  def show
    @wishlist = Wishlist.find(params[:id])
    render :show
  end

  private 

  def wish_list_params
    params.require(:wishlist).permit(:title, :author_id, :genre)
  end
end