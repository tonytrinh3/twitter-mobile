# Twitter Mobile

## How to run the project

### 'npm-install'

Make sure to "npm-install" the main folder as well as the "server" folder in order to install node_modules for the server and the client side.

### 'server/config/dev.js'

Create within the `server/config/` folder, create a `dev.js` where you will insert your Twitter Access Token, Access Token Secret, Bearer Token, API Key, and API Key Secret.

Below should be the format within `dev.js`.

module.exports = {
    twitterAccessToken: "",
    twitterAccessTokenSecret: "",
    twitterBearerToken: "",
    twitterAPIKey: "",
    twitterAPIKeySecret: "",
};

### 'npm run dev'

Within the main project folder, use `npm run dev` within the project terminal in order to launch both the server and the client side of the project concurrently. Server will be run on `localhost:5000` and client will run on `localhost:3000`.




