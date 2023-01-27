class SessionsController < ApplicationController


    def show
       user = User.find(session[:user_id])
       render json: user, serializer: UsersWithPostsSerializer
    end


    def destroy
        session.clear
        head :no_content
    end

    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "Incorrect name or password"}
        end
     
      end

      private
      
      def session_params
        params.permit(:bio, :post)
      end
end
