Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
  	resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:index, :show, :create]
    resources :wishlists, only: [:index, :show, :create, :destroy]
    resources :match_lists, only: [:index]
    resources :exchange_lists do 
      resources :books, only: [:index]
    end
  end

  root "static_pages#root"
end
