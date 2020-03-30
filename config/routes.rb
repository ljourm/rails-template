Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: %i(index)
    end
  end
end
