import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faHome,
  faCloudUploadAlt,
  faCoffee,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import "../styles/TabMenuStyle.css";
class TabMenu extends Component {
  render() {
    return (
      <div className="TabMenu">
        <div className="icon">
          <a href="#">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <FontAwesomeIcon icon={faGift} />
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <FontAwesomeIcon icon={faCloudUploadAlt} />
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <FontAwesomeIcon icon={faCoffee} />
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <FontAwesomeIcon icon={faCog} />
          </a>
        </div>
      </div>
    );
  }
}

export default TabMenu;
