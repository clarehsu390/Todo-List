Rails.application.routes.draw do



  namespace :api do
    resources :todos, only: [:index, :show, :create, :destroy, :update], defaults: {format: :json}
  end

  # resources :staticpages, only: [:root]

root :to => "static_pages#root"

end
