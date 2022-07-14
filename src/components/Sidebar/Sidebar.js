import React from "react";
import Sticky from "react-sticky-el";
import Profile from "../Profile/Profile";
import Suggestions from "../Suggestions/Suggestions";
import Footer from "../Footer/Footer";
import saloniImage from "../../assets/images/saloni-jindal.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile
            username="Saloni Jindal"
            caption="Just love it!"
            urlText="Switch"
            iconSize="big"
            image={saloniImage}
          />
          <Suggestions />
          <Footer />
        </div>
      </Sticky>
    </div>
  );
}

export default Sidebar;
