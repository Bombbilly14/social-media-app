class PostsController < ApplicationController

    def create
        post = current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params)
        render json: post, status: :updated
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    def show
        post = Post.find(params[:id])
        render json: post, serializer: PostWithCommentSerializer
    end

    def index
        if params[:user_id]
          @user = User.find(params[:user_id])
          render json: @user.posts
        else
          render json: Post.all
        end
      end

    private

    def post_params
        params.permit(:content, :user_id)
    end
end
