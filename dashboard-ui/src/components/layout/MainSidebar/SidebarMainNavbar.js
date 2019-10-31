import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";

import { Dispatcher, Constants } from "../../../flux";

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    // const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "24000px" }}
                src="data:image/png;base64,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"
                width="142"
                height="48"
                alt="DBS"
              />
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;
