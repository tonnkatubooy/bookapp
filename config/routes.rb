Rails.application.routes.draw do
  get 'messages/index'
  get 'messages/create'
  devise_for :users
  get 'posts/index'
  root to: "posts#index"
  resources :users, only: [:edit, :update, :show]
  resources :groups, only: [:new, :create,:edit,:update,:show] do
    resources :messages, only: [:index,:create]
  end
end
