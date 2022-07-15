import "./Profile.scss";
import React from "react";
import users from "../../data/users";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
const Profile = (props) => {
  const {
    username,
    caption,
    urlText,
    iconSize,
    image,
    captionSize,
    storyBorder,
    hideAccountName,
  } = props;

  let accountName = username
    ? username
    : users[Math.floor(Math.random() * users.length)].username;
  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {accountName ||
        (caption && !hideAccountName && (
          <div className="textContainer">
            <span className="accountName">{accountName}</span>
            <span className={`caption ${captionSize}`}>{caption}</span>
          </div>
        ))}
      <a href="/">{urlText}</a>
    </div>
  );
};

export default Profile;
