import "../Styles/Menu.scss";
import home from "../assets/images/home.png";
import explore from "../assets/images/explore.png";
import likes from "../assets/images/likes.png";
import messages from "../assets/images/messages.png";
import plus from "../assets/images/plus.png";
import image from "../assets/images/profilepic.jpeg";
import ProfileIcon from "./ProfileIcon/ProfileIcon";

function Menu() {
  return (
    <div className="menu">
      <img className="menu__icon" src={home} alt="home-icon" />
      <img className="menu__icon" src={messages} alt="messages-icon" />
      <img className="menu__icon" src={plus} alt="plus-icon" />
      <img className="menu__icon" src={explore} alt="explore-icon" />
      <img className="menu__icon" src={likes} alt="likes-icon" />
      <ProfileIcon iconSize="small" image={image} storyBorder={true} />
    </div>
  );
}

export default Menu;
