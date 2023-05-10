class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/makes" do
    makes = Make.all
    makes.to_json(include: :models)
  end
  
  post "/makes/new" do
    make = Make.create(
      name: params[:name],
      year_founded: params[:year_founded],
      logo_url: params[:logo_url],
      hq: params[:hq]
    )
    make.to_json
  end

  patch "/models/:id" do
    model = Model.find(params[:id])
    model.update(params)
    model.to_json
  end

  post "/models/new" do
    make_id = Make.find_by("name": params[:make].capitalize).id
    model = Model.create(
      body: params[:body],
      doors: params[:doors],
      drivetrain: params[:drivetrain],
      horsepower: params[:horsepower],
      img: params[:img],
      make_id: make_id,
      mpg: params[:mpg],
      name: params[:name],
      seats: params[:seats]
    )
    model.to_json
  end

  delete "/models/:id" do
    model = Model.find(params[:id])
    model.destroy
  end
end