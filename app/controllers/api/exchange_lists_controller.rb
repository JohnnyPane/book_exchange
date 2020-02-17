class Api::ExchangeListsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    exchangeLists = ExchangeList.all.where(author_id: current_user.id)
    @exchangeLists = exchangeLists.includes(:books)
    render :index
  end

  def create
    @exchangeList = ExchangeList.create!(author_id: current_user.id)
    # @exchangeList.author_id = current_user.id
    render :show
  end

  def destroy
  end

  def show
    @exchangeList = ExchangeList.find(params[:id])
    render :show
  end

  private 

  def exchange_list_params
    params.permit(:author_id)
  end
end