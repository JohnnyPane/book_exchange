class Api::ExchangeListsController < ApplicationController
  

  def index
    exchangeLists = ExchangeList.all.where(author_id: current_user)
    @exchangeLists = exchangeLists.includes(:books)
    render :index
  end

  def create
    @exchangeList = ExchangeList.create!(exchange_list_params)
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
    params.require(:exchangeList).permit(:author_id)
  end
end