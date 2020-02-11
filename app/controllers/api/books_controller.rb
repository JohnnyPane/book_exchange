class Api::BooksController < ApplicationController
  before_action :require_logged_in, only: [:create]
  skip_before_action :verify_authenticity_token

  PER_PAGE = 10

  def index
    @books = Book.all.where(author_id: current_user)
    render :index
  end

  def show
    @book = Book.find params[:id] 
  end

  def create
    @book = Book.new(book_params)

    @book.author_id = current_user.id
  
    if @book.save
      render :show
    else
      render @book.errors.full_messages, status: 401
    end
  end

  private

  def book_params
    params.permit(:title, :authors, :description, :imageURL, :author_id, :wishlist_id, :exchange_list_id)
  end
end