WikipagesWithEmber::Application.routes.draw do
  root :to => 'contacts#index'
  resources :contacts, :except => [:new, :edit]
end
