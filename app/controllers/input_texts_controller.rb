class InputTextsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @input_texts = InputText.page(params[:page])
  end

  def create
    return if params[:input_text].blank?
    @last_item = InputText.create content: params[:input_text]
    respond_to do |format|
	  format.json do
	    render json: {
	      value: @last_item.content,
	      count: @last_item.num_of_vowels
	    }.to_json
	  end
	end
  end
end