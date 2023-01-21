class SessionController < ApplicationController
    def destroy
        session.delete :user_id
        head :no_content
    end

    def create
        user = User.find_by(name: params[:name])
        session[:user_id] = user.id
        render json: user
      end
end
