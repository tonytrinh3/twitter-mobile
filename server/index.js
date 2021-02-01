const express = require("express");
const Twitter = require("twitter");
const cors = require('cors');
const keys = require('./config/keys');


const client = new Twitter({
  consumer_key: keys.twitterAPIKey,
  consumer_secret: keys.twitterAPIKeySecret,
  access_token_key: keys.twitterAccessToken,
  access_token_secret: keys.twitterAccessTokenSecret,
});

const defaults = {
  screen_name: "bts_bighit",
  tweet_mode: "extended",
  count: 20,
};

const app = express();
app.use(cors())

app.route("/:handle").get((req, res) => {
  //  console.log(res)
  const params = {
    ...defaults,
    max_id: req.query.max_id,
    screen_name: req.params.handle,
  };
  client.get(
    "statuses/user_timeline",
    params,
    function (error, tweets, response) {
      if (!error) {
        // console.log(tweets)
        //this is sent to /:handle
        //i think we don't have to worry about statuses/user_timeline on client side bc it is sent to us
        res.json(tweets);
      } else {
        console.error(error);
      }
    }
  );
});

app.get("/", (req, res) => {
  res.send("hi there");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, function (error) {
  console.log("BTS listening on port 5000");
});
