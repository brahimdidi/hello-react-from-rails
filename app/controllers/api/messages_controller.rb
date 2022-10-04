module Api
  class API::MessagesController < ApplicationController
    def index
      Message.order(Arel.sql('RANDOM()')).first.greeting
    end
  end
end


