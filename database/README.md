# Digital Garage

## Welcome 

Welcome to the **Digital Garage** vehicle storage database. Here you can add cars you like to the database, saving them and finding them when you want to later. Your submission will be persisted to a ruby, Active Record, Sinatra-based server. On the [front-end UI](https://github.com/jaredsurya/car-models-frontend), we can navigate to the Vehicles page where will see all of the cars paired with their makes(manufacturers). Every vehicle model has only one make, and every vehicle make has multiple models.

![Screen Shot 2022-11-19 at 5 05 30 PM](https://user-images.githubusercontent.com/93106753/202873260-0517eef6-6b7a-4d9a-95fa-9a2c3ea8389a.png)


## Description

I built this app to engage the Phase 3 project at Flatiron School. Also, I chose the Digital Garage concept because I enjoy vehicles, and found them to be ubiquitous and straightforward to work with. This app has 2 forms (Make, Model) in which the user is prompted to enter values pertinent to a vehicle make (manufacturer) or car model. Upon submitting a form, the data is saved in a back-end server run by Active Record & Sinatra. After submitting a new car, the new entries as well as prior ones are easily viewed on the 'Vehicles' page. There, a user may interact with the UI to edit or delete models at will. 

![Editor](https://user-images.githubusercontent.com/93106753/202864763-cd5c8592-6c03-4419-8450-ec3d62b50a49.png)

## Installation

Proper functioning of this app requires this repository as well as one for back-end, found [at this address.](https://github.com/jaredsurya/car-models-frontend)
This app will requre 2 VS Code sessions to be open, one for client-side and one for server-side.
From the 'car-models-db' repo folder, please open the folder in VS code and run `bundle install`. Then, running `bundle exec rake server` will get the backend server going.

For the front-end, please open the 'car-models-frontend' directory in VS code and in your terminal run `npm install` followed by `npm run server`. After this, open up a new terminal window and run `npm start`. 

The backend server will be listening from `localhost:9292` and the frontend will be ran on `localhost:3000`.

## License 

[MIT](https://choosealicense.com/licenses/mit/)
