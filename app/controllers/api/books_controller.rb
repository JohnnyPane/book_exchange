class Api::BooksController < ApplicationController
  before_action :require_logged_in, only: [:create]

  PER_PAGE = 10

  def index
    @books = Book.all.where(author_id: current_user)
    render :index
  end

  def show
    @book = Book.find params[:id] 
  end

  def create
    @book = Book.create!(book_params)
    render :show
  end

  private

  def book_params
    params.require(:book).permit(:title, :authors, :description, :imageURL)
  end
end