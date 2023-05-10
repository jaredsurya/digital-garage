puts "🌱 Seeding..."


# Seed Makes:

subaru = Make.create(name: "Subaru", year_founded: "1953", logo_url: "https://listcarbrands.com/wp-content/uploads/2016/03/logo-Subaru-600x189.png", hq: "Ebisu, Shibuya, Japan")
mazda = Make.create(name: "Mazda", year_founded: "1920", logo_url: "https://upload.wikimedia.org/wikipedia/en/2/2b/Mazda_qurent_logo.png", hq: "3-1 Shinchi, Fuchū, Hiroshima, Japan")
ford = Make.create(name: "Ford", year_founded: "1903", logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1024px-Ford_logo_flat.svg.png", hq: "Dearborn, Michigan, U.S.")


# Seed Models:
# Subaru
Model.create(make_id: subaru.id, name: "Impreza", img: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023SUC040061_1280_01", mpg: 26, drivetrain: "AWD", horsepower: 152, seats: 5, body: "Midsize Car", doors: 4)
Model.create(make_id: subaru.id, name: "Outback", img: "https://s7d1.scene7.com/is/image/scom/PDE_default_pass_scaled?$900wa$", mpg: 28, drivetrain: "4WD", horsepower: 182, seats: 5, body: "Small SUV", doors: 4)
Model.create(make_id: subaru.id, name: "Forester", img: "https://hips.hearstapps.com/hmg-prod/images/2023-subaru-forester-101-1666210570.jpg?crop=0.598xw:0.672xh;0.358xw,0.176xh&resize=768:*", mpg: 29, drivetrain: "4WD", horsepower: 182, seats: 5, body: "Small SUV", doors: 4)
Model.create(make_id: subaru.id, name: "Crosstrek", img: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023SUC040061_1280_01", mpg: 26, drivetrain: "4WD", horsepower: 152, seats: 5, body: "Small SUV", doors: 4)
Model.create(make_id: subaru.id, name: "WRX", img: "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2023SUC040061_1280_01", mpg: 26, drivetrain: "AWD", horsepower: 271, seats: 5, body: "Compact Car", doors: 4)

# Mazda
Model.create(make_id: mazda.id, name: "CX-9", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/25296c06-664f-4561-acb1-9c98f9511db1/4be6cb16-e6d4-4c4e-9fb3-20247510931c.png", mpg: 23, drivetrain: "AWD", horsepower: 227, seats: 6, body: "SUV", doors: 4)
Model.create(make_id: mazda.id, name: "CX-5", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/40b84b66-8ac2-4bb2-9e30-d2350c34a251/2eed9656-e435-4150-954c-2bdccb681921.png", mpg: 26, drivetrain: "AWD", horsepower: 187, seats: 5, body: "Small SUV", doors: 4)
Model.create(make_id: mazda.id, name: "MX-5 Miata Sport", img: "https://www.autotrader.com/wp-content/uploads/2022/01/2022-mazda-mx-5-miata-grand-touring.jpg?resize=768,432", mpg: 29, drivetrain: "RWD", horsepower: 181, seats: 2, body: "Two-seater", doors: 2)
Model.create(make_id: mazda.id, name: "Mazda3", img: "https://www.mazdausa.com/siteassets/vehicles/2023/mazda3-sedan/build-and-price/trims/ext.-360s/2.5/blue/e360-my22-mazda3-sedan-fwd-2-5s-deepcrystalblue-000.jpg", mpg: 31, drivetrain: "FWD", horsepower: 155, seats: 5, body: "Compact Car", doors: 4)
Model.create(make_id: mazda.id, name: "CX-50", img: "https://media.ed.edmunds-media.com/mazda/cx-50/2022/fe/2022_mazda_cx-50_f34_fe_325221_1600.jpg", mpg: 27, drivetrain: "AWD", horsepower: 187, seats: 5, body: "SUV", doors: 4)

# Ford
Model.create(make_id: ford.id, name: "Bronco", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/e90a18aa-91e9-4838-a202-fd4b9c3affca/19a2933c-d93d-4884-bc01-1f32cab117a1.png", mpg: 20, drivetrain: "4WD", horsepower: 315, seats: 5, body: "Truck", doors: 4)
Model.create(make_id: ford.id, name: "Mustang", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/90884105-7fd5-4da9-8479-27e482a4e479/2b678835-3279-4de7-8047-36484d4e2900.png", mpg: 25, drivetrain: "RWD", horsepower: 310, seats: 4, body: "Subcompact Car", doors: 4)
Model.create(make_id: ford.id, name: "Taurus", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/fc6072ff-5775-43b7-828a-f7f50b7a32bd/831e27ee-3d27-42f8-b207-d08eaa8857c4.png", mpg: 21, drivetrain: "FWD", horsepower: 288, seats: 5, body: "Large Car", doors: 4)
Model.create(make_id: ford.id, name: "Transit-350", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/ac882336-dee4-4d80-b83b-da1dc5a68d34/ef17bfeb-697f-49a5-b95d-2210237062e4.png", mpg: 13, drivetrain: "RWD", horsepower: 310, seats: 1, body: "Cargo Van", doors: 3)
Model.create(make_id: ford.id, name: "Shelby GT500", img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/6fc391c8-2e8b-4854-b84c-3c94c431fb19/ca5e1b68-4c6b-403b-b95a-a77a6f529da5.png", mpg: 14, drivetrain: "RWD", horsepower: 760, seats: 2, body: "Subcompact Car", doors: 2)

puts "✅ Done seeding!"
