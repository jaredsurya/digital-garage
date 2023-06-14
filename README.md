# Digital Garage

## Welcome 

Welcome to the **Digital Garage** vehicle storage database. Here you can add cars you like to the database, saving them and finding them when you want to later. Your submission from the user interface will be persisted to a ruby, Active Record, Sinatra-based server. On this front-end UI, we can navigate to the Vehicles page where will see all of the cars paired with their makes(manufacturers). Every vehicle model has only one make, and every vehicle make has multiple models.

![Screen Shot 2022-11-19 at 5 05 30 PM](https://user-images.githubusercontent.com/93106753/202873260-0517eef6-6b7a-4d9a-95fa-9a2c3ea8389a.png)


## Description

I built this app to engage the Phase 3 project at Flatiron School. Also, I chose the Digital Garage concept because I enjoy vehicles, and found them to be ubiquitous and straightforward to work with. This app has 2 forms (Make, Model) in which the user is prompted to enter values pertinent to a vehicle make (manufacturer) or car model. Upon submitting a form, the data is saved in a back-end server run by Active Record & Sinatra. After submitting a new car, the new entries as well as prior ones are easily viewed on the 'Vehicles' page. There, a user may interact with the UI to edit or delete models at will. 

![Editor](https://user-images.githubusercontent.com/93106753/202864763-cd5c8592-6c03-4419-8450-ec3d62b50a49.png)

## Installation

Proper functioning of this app requires this repository to have two terminals open, one for the front-end UI and one for server-side.
CD into the 'database' folder in a terminal. Once open, run `bundle install`. Then, run `bundle exec rake server` to get the backend server going.

CD into the root directory in your terminal and run `npm install`. After this, run `npm start`. 

The backend server will be listening from `localhost:9292` and the frontend will be up and running on `localhost:3000`.

## License 

[MIT](https://choosealicense.com/licenses/mit/)
