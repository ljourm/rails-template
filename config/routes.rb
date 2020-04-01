Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'homes#index'

  devise_for :users, skip: :all
  devise_scope :user do
    get :login, to: 'devise/sessions#new', as: :new_user_session
    post :login, to: 'devise/sessions#create', as: :user_session
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: %i(index) do
        collection do
          delete :sessions, to: 'users/sessions#destroy'
        end
      end
    end
  end
end
