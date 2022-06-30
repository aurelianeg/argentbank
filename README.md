# ArgentBank

This version of the web application for ArgentBank allows customers to login and to manage their accounts and their profile.

## Prerequisites

-  [NodeJS](https://nodejs.org/en/) v12+
-  [MongoDB Community Server](https://www.mongodb.com/try/download/community)
-  [npm](https://www.npmjs.com/)
-  [Yarn](https://yarnpkg.com/)
-  [React](https://fr.reactjs.org/) v18.1.0
-  [React Router](https://reactrouter.com/) v6.3.0
-  [React Redux](https://react-redux.js.org/) v8.0.2
-  [Redux](https://redux.js.org/) v4.2.0
-  [Redux Persist](https://www.npmjs.com/package/redux-persist) v6.0.0
-  [Redux Toolkit](https://redux-toolkit.js.org/) v1.8.2
-  [PropTypes](https://www.npmjs.com/package/prop-types) v15.8.1
-  [StyledComponents](https://www.npmjs.com/package/styled-components) v5.3.5

## Installation and launch

### Back-end

The back-end repository is available on [this link](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API).

1. Clone the repository

```sh
git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git
```

2. Install the dependencies

```sh
npm install
```

3. Start the local development server

```sh
npm run dev:server
```

4. Populate MongoDB database

```sh
npm run populate-db
```

The server should be running at http://localhost:3001.

#### Populated users

There are now two users in the MongoDB database:

1. Tony Stark
- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

2. Steve Rogers
- First Name: `Steve`
- Last Name: `Rogers`
- Email: `steve@rogers.com`
- Password: `password456`

Provided emails and passwords can be used to login to the ArgentBank application.

#### API documentation

Once the local environment is started, learn more about how the API works here: http://localhost:3001/api-docs

### Front-end

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/argentbank.git
```

2. Install the dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in the development mode, and opens [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload when changes are made in the code. Any lint errors can also be seen in the console.
