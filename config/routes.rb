Rails.application.routes.draw do
  
  resources :comments
  resources :posts do
    resources :comments
  end
  resources :follows
  resources :users do
    resources :posts, only: [:index, :show, :create, :update, :destroy]
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"
end
