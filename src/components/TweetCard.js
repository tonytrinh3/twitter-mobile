import React from "react";
import { ReactComponent as VerifiedCheck } from "assets/img/check.svg";

const TweetCard = ({ tweet, i, hashtags }) => {
  const { user, created_at, full_text, entities } = tweet;

  return (
    <div className="tweets" key={i}>
      <div className="tweets__main-row">
        <img
          className="profile-img tweets__profile-pic"
          src={user.profile_image_url_https}
          alt={user.name}
        />
        <h4>{user.name}</h4>
        {user.verified ? (
          <VerifiedCheck className="tweets__verified verified-check" />
        ) : null}
        <h5>@{user.screen_name}</h5>
        <h5 className="tweets__date">
          {created_at.split(" ")[1]} {created_at.split(" ")[2]}
        </h5>
      </div>

      <p className="tweets__hashtags">{hashtags}</p>

      <p>{full_text}</p>
      {entities.media ? (
        <img
          className="tweets__attached-img"
          style={{
            backgroundImage: `url(${entities.media[0].media_url_https})`,
          }}
        />
      ) : null}

      {/* <p>{tweet.retweet_count}</p> */}
    </div>
  );
};

export default TweetCard;
