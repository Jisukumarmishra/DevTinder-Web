Create a Vite + React Project

Installing Talwind Css :=
npm install tailwindcss @tailwindcss/vite

Using Component Library DaisyUi it is compatible with talwind>=
npm i -D daisyui@latest
@plugin "daisyui"; add This into the app.css

Install react routing dom package for the routing
Routing is Root level of An Application

instal The cors package in backend To Sove The Cors proeblem
add middleware of the cors in the backend with the credentials and origin to extract the token from the cookies and user in the login browser

# Install Redux ToolKit To Stroe The user Data In Redux Store

install the react-redux+@reduxjs/toolkit -----> configureStore -----> Provider (Provide A Store in The Application(app.jsx))------->createSlice And Export Things Properly(actions export)-----------> add Reducer to the store

// now create page to see all my connections

// i can store my connections to appstore (redux store) or create a state varriable for it

// to get the data form the store use useSelector

# Complete The Accept And Reject Features

# Deployment

-- on aws Launch Instance
-- chmod 400 "Secret_Keys.pem" // public the key
-- ssh command (private key) // ssh-i-"Secret_keys.ppm" machine-configurations
-- install same version of the node // nvm install 24.10.0
-- git clone // ls for check
-- Deploy Fronted
-- npm install // install depedencies
-- npm run build // in both loacal machine and remote machine to create a dist file in both machine
-- sudo apt update // to update the system
-- sudo apt install nginx // nginx is open source software that provide http webserver, load balancer etc to deploy the server
-- sudo systemctl start nginx // command to start nginx onto the system
-- sudo systemctl enable nginx
_-- sudo scp -r dist/_ /var/www/html // copy code form the dist (build files) folder to /var/www/html/
-- enable port :80 of your instace
-- BackEnd Deployment
--
