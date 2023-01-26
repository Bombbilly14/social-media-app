class UsersController < ApplicationController
    # before_action :authorize

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user, serializer: UsersWithPostsSerializer
    end

    def destroy
        user = find_user
        user.destroy

        head :no_content
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    private

    def find_user
        User.find_by(slug: params[:id])
    end
    
    def user_params
        params.permit(:name, :avatar, :email, :password, :bio)
    end
end
