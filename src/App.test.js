import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import HandlerBanner from "components/HandlerBanner/HandlerBanner";
import TweetCard from "components/TweetCard/TweetCard";
import InfiniteScroll from "react-infinite-scroll-component";

let wrapper;

beforeEach(() => {

  wrapper = shallow(<App />);
});


it("renders tweets list", () => {
  //console.log(wrapper.debug())
  expect(wrapper.find("div.tweets-list").length).toEqual(1);
});

it("has InfiniteScroll", () => {
  // expect(wrapper.containsMatchingElement(<HandlerBanner />)).toEqual(true);
  console.log(wrapper.debug());
  expect(wrapper.find("InfiniteScroll").length).toEqual(1);
  // expect(wrapper.contains(<HandlerBanner/>)).toBe(true);
});



// it("renders 20 Tweets",()=>{

//     expect(wrapper.find('.tweets__link')).toHaveLength(20);
//   // expect(wrapper.contains(<HandlerBanner/>)).toBe(true);
// })

// it("defaultHandles works",()=>{

//   expect(wrapper.find('.tweets__link')).toHaveLength(20);
// // expect(wrapper.contains(<HandlerBanner/>)).toBe(true);
// })

//need to test if fetch data is correct

