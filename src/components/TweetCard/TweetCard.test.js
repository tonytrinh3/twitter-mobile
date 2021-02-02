//test to see if cards render
//test to see if you get prop

import React from "react";
import { shallow } from "enzyme";
import TweetCard from "./TweetCard";

describe("elements within TweetCard", () => {
  let wrapper, tweet, i, hashtags;
  beforeEach(() => {
    i = 1;
    hashtags = ["#BTS", "#KPOP", "#BigHit"];
    tweet = {
      created_at: "Tue May 07 09:13:05 +0000 2013",
      full_text: "Some Text",
      entities: {
        media: [
          {
            media_url_https: "https://pbs.twimg.com/media/EtGusZnUwAIBItl.png",
          },
        ],
      },
      user: {
        name: "BTS_official",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1318205976110010371/hvlZiocy_normal.jpg",
        screen_name: "bts_bighit",
        verified: true,
      },
    };
    wrapper = shallow(<TweetCard tweet={tweet} i={i} hashtags={hashtags} />);
  });

  it("renders the TweetCard component", () => {
    expect(wrapper.find("div.tweets").length).toEqual(1);
  });

  it("renders the TweetCard profile image", () => {
    expect(wrapper.find("img.profile-img").length).toEqual(1);
  });

  it("renders the TweetCard profile name ", () => {
    expect(wrapper.find("h4.tweets__handler-name").length).toEqual(1);
  });

  it("renders the TweetCard profile username ", () => {
    expect(wrapper.find("h5.tweets__handler-username").length).toEqual(1);
  });

  it("renders the TweetCard date ", () => {
    expect(wrapper.find("h5.tweets__date").length).toEqual(1);
  });

  it("renders the TweetCard hashtags ", () => {
    expect(wrapper.find("p.tweets__hashtags").length).toEqual(1);
  });

  it("renders the TweetCard image ", () => {
    expect(wrapper.find("img.tweets__attached-img").length).toEqual(1);
  });

  it("renders the TweetCard verified check ", () => {
    expect(wrapper.find(".tweets__verified").length).toEqual(1);
  });
});
