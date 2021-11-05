# Wellcome to my To Do List React project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the frontend app of the To Do List made for the Career Blitz by Trybe.

With this app you will be able to:
* Create a user;
* Sign in with created user;
* After signed in:
  * Create a task;
  * View all tasks;
  * Update a task;
  * Update a task status;
  * Delete a task.

# Skills

* React;
* RTL;
* React router dom.

# How to run the app

## Requirements

* npm: 7.5.4
* Environment variables setup (`.env` file)

## Steps

* After downloading the app, enter the project folder.
* Run the command `npm ci` to install project dependencies.
* Run the command `npm start` to start the app.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Available routes

### Sign Up Page

  `/signup`
  Has a form to add a user

### Sign In Page

  `/`
  Has a form to log in with the created user

### Tasks Page

  `/tasks`
  After sign in has access to tasks CRUD