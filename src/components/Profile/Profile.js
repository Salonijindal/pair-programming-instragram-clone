import "./Profile.scss";
import React from "react";
import users from "../../data/users";
import saloniImage from "../../assets/images/saloni-jindal.jpg";
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
      <ProfileIcon />
    </div>
  );
};

export default Profile;
