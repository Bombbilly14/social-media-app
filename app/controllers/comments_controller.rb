class CommentsController < ApplicationController

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    def create
        # post = Post.find(params[:post_id])
        comment = post.comments.create!(comment_params.merge(user_id: logged_in_user.id))
        render json: comment, status: :created
      end
      

    def update
        comment = Comment.find(params[:id])
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    private

    def comment_params
        params.permit(:content, :user_id, :name)
    end
end
