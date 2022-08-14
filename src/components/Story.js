import "../Styles/Story.scss";
import Users from "../data/users";
import ProfileIcon from "./ProfileIcon/ProfileIcon";

function Story() {
  let accountName = Users[Math.floor(Math.random() * Users.length)].username;

  if (accountName.length > 10) {
    accountName = accountName.substring(0, 10) + "...";
  }
  return (
    <div className="story">
      <ProfileIcon iconSize="big" storyBorder={true} />
      <span className="accountName">{accountName}</span>
    </div>
  );
}

export default Story;
