import "../Styles/Navigation.scss";
import logo from "../assets/images/instagramlogo.png";
import Menu from "./Menu";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <img className="navigation__logo" src={logo} alt="instagram-logo" />
        <input
          type="text"
          className="navigation__search"
          placeholder="Search"
        ></input>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
