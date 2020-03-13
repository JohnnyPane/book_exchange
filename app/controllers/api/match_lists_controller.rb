class Api::MatchListsController < ApplicationController
	before_action :require_logged_in

	def index
    @matchList = Book.add_book_info_to_sorted_lists(current_user.id)
    render :index
	end

	private

	def standing_params
		params.require(:book).permit(:author_id)
	end
end
