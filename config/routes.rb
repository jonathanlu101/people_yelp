Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#angular'

  scope '/auth' do
    devise_for :users
  end

  scope '/api' do
    resources :users
    resources :reviews
    resources :traits
  end

  get "*unmatched_route" => "application#angular"

end
