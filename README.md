# Create a Vite + React Project

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

# Deploy Fronted

-- npm install // install depedencies
-- npm run build // in both loacal machine and remote machine to create a dist file in both machine
-- sudo apt update // to update the system
-- sudo apt install nginx // nginx is open source software that provide http webserver, load balancer etc to deploy the server
-- sudo systemctl start nginx // command to start nginx onto the system
-- sudo systemctl enable nginx
-- copy code form the dist (build files) folder to /var/www/html/
-- sudo scp -r dist/\* /var/www/html
-- enable port :80 of your instace

# BackEnd Deployment

-- allowed ec2 instace public ip on mongodb server
-- install pm2 // to make a app online everytime we use pm2 prpcess manager
npm install pm2 -g pm2 helps to create a process that run in the background even terminal is closed also we don need to evertime run npm start
-- pm2 start npm -- start // to start the process
-- pm2 logs
-- pm2 list, pm2 stop <name of the process>, pm2 delete <name of the process>, pm2 flush <process name>
-- to change the name of the process and start // pm2 start npm --name "devtinder-backend" -- start
-- config nginx - /etc/nginx/sites-available/default
-- restart nginx - sudo systemctl restart nginx
-- modify the BASE_URL in fornted project to /api

# Nginx Config

fronted = http://13.63.139.211
backend = http://13.63.139.211:3000/

Domain Name = Devtinder.com => 13.63.139.211

fronted = Devtinder.com
backend = Devtinder.com:3000 => Devtinder.com/api

location /api/ {
proxy_pass http://localhost:3000/;

        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

// whenever you make any request its first goes to the nginx

# Adding a Custom Domain Name

- Purchesed Domain Name form GoDaddY
- SignUp To CloudFare And Add a New Domain Name // To manage the dns of the Your Doamin You Can Use a Cloudfare, its provide extra featutres
  \*\*\*- change the nameserver on godaddy/ hostinger and point it to cloudfare
- Added the - A record on the cloudflare(you can add your personal ip address in the a record) "tale almot 50 minutes"
- enable full ssl for websites

# Sending Email Via SES

- Create a IAM User
- Give Access To AmazonSESFullAccess
- Amazon SES:- Create An Identity
- Verufy Your Domain Name
- Verify Your Email Address Identity
- Install AWS SDK - v3
- Code Example:- https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- setup secClient
- Access Credentials Should Be Created in IAM under securitycredentials tab
- add the credentials to the env files
- write code for sesClient

const sesClient = new SESClient({ region: REGION, credentials: {
accessKeyId: process.env.AWS_ACCESS_KEY,
secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY
} });

- write code for sending Email Address

const createSendEmailCommand = (toAddress, fromAddress,subject, body) => {
const run = async (subject, body) => {
const sendEmailCommand = createSendEmailCommand(
"email"
"domainEmail"
subject,
body,
)

try {

} catch (err) {

}

}
}

- make the emails dynamic by passing more params to the run function

# Implementations Of Scheduling Task Using CRON JOBS in NodeJS

- Features:- For Every Day At 8 am Monring We Should Send The Emails to all the users that
  Get The Connections Request In The Last Days
  - Installing node package (npm i node-cron);
  - learning About cron expressions syntax - crontab.guru
  - Schedule a job
  - using node package data-fns for data modification( npm i date-fns)
  - find all the unique(use 'new Set' ) email id who have got connection request in previous day
  - send email
  - explore Queue Mechanism To send Bulk emails
  - amazon ses bulk email sending
  - make sendEmails Function dynamic
  - bee-queue and bull npm package

# Payment GateWay Integration

- sign up on rajorpay and complete kyc
- Created A Ui For premium Page
- Creating an API for create Order in backend
- addeded my Key And Secret Key in the .env file
- create a configure file in seperated folder(utils) and file
- Intialize The Rajorpay(in utils) And Create The Instance
- Created Order on Razorpay And Send The Order Id To The Frontend
- created schemna and model
- save the order in payment collection
- make the api dynamic
- Setup Razorpay Webhook on your Live Api

# 1. My Deployment Setup

Component Configuration
Cloud server AWS EC2
Frontend repository ~/DevTinder-Web
Backend repository ~/DevTinder
Frontend technology React + Vite
Frontend production build ~/DevTinder-Web/dist
Nginx frontend directory /var/www/html
Backend process manager PM2
Backend process name devtinder-backend
Frontend website https://devtinder.jisukumar.in
Portfolio website https://jisukumar.in

2. Every Time I Update the Frontend

- 1: Push changes to GitHub
- 2: Connect to AWS EC2
- 3 : Navigate to the frontend repository(cd ~/DevTinder-Web)
- 4 Pull the latest GitHub changes (git pull --ff-only origin main)
- If Git reports local changes or a conflict, stop and resolve the issue before continuing.
- 5: Install dependencies and build(npm ci,
  npm run build)

- Wait until Vite reports that the build completed successfully.

- 6: Publish the frontend

Your current Nginx document root is /var/www/html.

sudo cp -a dist/. /var/www/html/
Step 7: Verify the deployment
git log -1 --oneline
ls -lah /var/www/html

Open:-
https://devtinder.jisukumar.in

Press Ctrl + Shift + R to refresh the website.

Frontend deployment complete! You do not need to restart PM2 or Nginx just to publish updated static frontend files.
