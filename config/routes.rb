Rails.application.routes.draw do
  get 'static/index'
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'static#index'
  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :messages
  end
end
