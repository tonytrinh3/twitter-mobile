//test to see if handlerbanner render
//test to see if you get prop

import React from "react";
import { shallow } from "enzyme";
import {spy} from 'sinon';
import HandlerBanner from "./HandlerBanner";

import { act, renderHook } from "@testing-library/react-hooks";


describe("elements within Handler Banner", () => {
  let wrapper, defaultHandles, setDefaultHandlesSpy, tweets;

  defaultHandles = ["bts_bighit", "atptour"];
  tweets = [
    {
      user: {
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1318205976110010371/hvlZiocy_normal.jpg",
      },
    },
  ];
  setDefaultHandlesSpy = spy();

  beforeEach(() => {
    wrapper = shallow(
      <HandlerBanner
        defaultHandles={defaultHandles}
        setDefaultHandles={setDefaultHandlesSpy}
        handleImg={tweets[0].user.profile_image_url_https}
      />
    );
  });
  it("renders the HandleBanner component", () => {
    expect(wrapper.find("div.handler-banner").length).toEqual(1);
  });

  it("renders HandleBanner profile img", () => {
    expect(wrapper.find("img.profile-img").length).toEqual(1);
  });

  it("renders two handlers", () => {
    expect(wrapper.find("div.handler-banner h2").length).toEqual(2);
  });

  it("calls default handler onclick", () => {
    wrapper.find("div.handler-banner__handle--1").simulate('click');
    expect(setDefaultHandlesSpy).toBeCalled;

  });
});

//need to test if fetch data is correct
