class Api::WishlistsController < ApplicationController
  before_action :require_logged_in, only: [:create]
  skip_before_action :verify_authenticity_token


  def index
    wishlists = Wishlist.all.where(author_id: current_user)
    @wishlists = wishlists.includes(:books)
    render :index
  end

  def create
    @wishlist = Wishlist.new(wish_list_params)

    @wishlist.author_id = current_user.id

    if @wishlist.save
      render :show
    else 
      render @wishlist.errors.full_messages, status: 401
    end
  end

  def destroy
  end

  def show
    @wishlist = Wishlist.find(params[:id])
    render :show
  end

  private 

  def wish_list_params
    params.permit(:title, :author_id, :genre)
  end
end