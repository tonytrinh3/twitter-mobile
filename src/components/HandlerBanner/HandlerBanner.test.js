//test to see if handlerbanner render
//test to see if you get prop

import React from "react";
import { shallow } from "enzyme";
import HandlerBanner from "./HandlerBanner";

import { act, renderHook } from "@testing-library/react-hooks";

let wrapper, defaultHandles, setDefaultHandles, tweets;

defaultHandles = ["bts_bighit", "atptour"];
tweets = [
  {
    user: {
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1318205976110010371/hvlZiocy_normal.jpg",
    },
  },
];
setDefaultHandles = jest.fn();

beforeEach(() => {
  wrapper = shallow(
    <HandlerBanner
      defaultHandles={defaultHandles}
      setDefaultHandles={setDefaultHandles}
      handleImg={tweets[0].user.profile_image_url_https}
    />
  );
});

// describe("chosenHandler change", () => {
//   it("default handler change", () => {
//     const { result } = renderHook(() => (
//       <HandlerBanner
//         defaultHandles={defaultHandles}
//         setDefaultHandles={setDefaultHandles}
//         handleImg={tweets[0].user.profile_image_url_https}
//       />
//     ));

//     act(() => {
//       result.current.chosenHandler();
//     });
 

//     expect(result.current.defaultHandles).toBe([
//       defaultHandles[1],
//       defaultHandles[0],
//     ]);
//   });
// });

//TODO do test on setDefaultHandles jest.fn()

it("renders the HandleBanner component", () => {
  expect(wrapper.find("div.handler-banner").length).toEqual(1);
});

it("renders HandleBanner profile img", () => {
  expect(wrapper.find("img.profile-img").length).toEqual(1);
});

it("renders two handlers", () => {
  expect(wrapper.find("div.handler-banner h2").length).toEqual(2);
});

//need to test if fetch data is correct
