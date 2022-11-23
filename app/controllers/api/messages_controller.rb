module Api
  class MessagesController < ApplicationController
    def index
      @message = Message.order(Arel.sql('RANDOM()')).first
      render json: @message
    end
  end
end
