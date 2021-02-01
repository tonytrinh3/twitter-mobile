import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReactComponent as VerifiedCheck } from "assets/img/check.svg";

import "sass/main.scss";

import FixedHandler from "components/FixedHandler";
import TweetCard from "components/TweetCard";

function App() {
  const [tweets, setTweets] = useState([]);
  const [lastTweetId, setLastTweetId] = useState("");
  const [defaultHandles, setDefaultHandles] = useState([
    "bts_bighit",
    "atptour",
  ]);

  useEffect(() => {
    //when user fetch more tweets of the same handler
    fetchTweet(lastTweetId, defaultHandles[0], tweets);
  }, [lastTweetId]);

  useEffect(() => {
    //when user click new handler - fetch new tweets
    fetchTweet("", defaultHandles[0], []);
    window.scrollTo(0, 0);
  }, [defaultHandles]);

  const fetchTweet = async (lastTweetId, userHandle, tweets) => {
    let addMaxId = "";
    if (lastTweetId) {
      addMaxId = `?max_id=${lastTweetId}`;
    }
    const res = await fetch(`http://localhost:5000/${userHandle}${addMaxId}`);

    const fetchedTweets = await res.json();

    setTweets([...tweets, ...fetchedTweets]);
  };
  // console.log(tweets);

  const renderTweets = tweets.map((tweet, i) => {
    const { entities, id_str } = tweet;

    const renderHashtags = entities.hashtags.map((tag, i) => {
      return (
        <span className="" key={i}>
          #{tag.text}{" "}
        </span>
      );
    });

    return (
      <a
        href={`https://twitter.com/${defaultHandles[0]}/status/${id_str}`}
        key={i}
      >
        <TweetCard tweet={tweet} i={i} hashtags={renderHashtags} />
      </a>
    );
  });

  const fetchNextTweets = (tweets) => {
    setTimeout(() => {
      setLastTweetId(tweets[tweets.length - 1].id);
    }, 500);
  };

  return (
    <div className="main-page">
      {tweets.length > 0 ? (
        <FixedHandler
          defaultHandles={defaultHandles}
          setDefaultHandles={setDefaultHandles}
          handleImg={tweets[0].user.profile_image_url_https}
        />
      ) : null}

      <div className="tweets-list">
        {renderTweets}

        <InfiniteScroll
          dataLength={tweets.length}
          next={() => {
            fetchNextTweets(tweets);
          }}
          hasMore={true}
          loader={<h4 className="tweets-list__loading">Loading...</h4>}
        />
      </div>
    </div>
  );
}

export default App;
