Creating a To-Do-List Front-end interface with React/babel & Webpack

SETUP

    1) npm init -y
     
     initalizing my npm project that will Node's npm to import React's library

    2) npm i react react-dom
     
     install react to this directory and add it as a dependency for this package

    3) npm i babel-core babel-loader 
     
     babel-preset-es2015 babel-preset-react
     install babel which will complie JSX into vanilla JS. This repo is using a deprecated version of babel as recomened by the React walkthrough I am following. If I can get this program to work without using this deprecated version I will update the dependecies

    4) npm i webpack webpack-dev-server

     webpack is used in this repo to bundle this repos code for testing and deployment. Webpack can minify code to increase efficency.

    5) create a src dir where react coding will take place
        create a sub dir /app for JS React code
        create index.html this will serve a temp homepage html doc

    6) add npm scripts for when the application needs to be tested
    
        The first to add will be the 'build' script, this is what really starts the application. 

        The webpack -d command is ran to start debuging 

        next webpack-dev-server command is ran to start up the server, the /src dir is assigned as the content-base and --hot is used to restart the server when changes are made, finally a port is assigned to the server with --port

        the 'build' script will contain the following 
        webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 7777

        to avoid needing to write this in the terminal every time the project is ran, a shortcut can be created with the 'start' script so the only command needed is 'npm start'. This will contain 'npm run build' (any npm scripts that are not built in like start must have run before them) 

Creating The First React Component

    components are the building blocks used in react. They are set up similar to functions and they can take arugments to make more customizable UI elements.


[Beginner React Walkthrough](https://www.youtube.com/watch?v=yZ0f1Apb5CU&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR&index=1)