import "./Suggestions.scss";
import React from "react";
import Profile from "../Profile/Profile";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="titleContainer__title">Suggestions For You</div>
        <a href="/">See All</a>
      </div>
      <Profile
        caption="Followed by Chelsia + 2 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by Chelsia + 2 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by Chelsia + 2 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Followed by Chelsia + 2 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
    </div>
  );
};

export default Suggestions;
