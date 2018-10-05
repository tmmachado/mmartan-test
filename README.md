# mmartan test project

A full-stack test project with a React fron-end talking to a GraphQL Express API connected to a Postgres database.

## How to use

This project is divided in two folders: client and server. The client folder holds the code for the front-end app, while the server holds the code for the back-end.

It's advisable that you start from the server app, since you'll need it to fetch data from the client.

## Prerequisites

Make sure to have node installed on your computer as it'll be necessary to run both the client and server apps. Next, choose a folder to clone the app and run:

``````
git clone https://github.com/tmmachado/mmartan-test.git
``````

## Server installation

Execute the commands bellow to get the server up and running locally:

``````
cd mmartan-test
cd server
npm install
node app
``````

You should be able to see a "Connection has been established successfully." message on your terminal.

## Client installation

Execute the commands bellow to get the client up and running locally:

``````
cd mmartan-test
cd client
npm install
npm start
``````

A new window will open on your browser on the address localhost:3000.
