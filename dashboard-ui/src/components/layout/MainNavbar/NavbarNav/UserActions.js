import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            src="data:image/png;base64,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"
            alt="User Avatar"
            width="40"
            height="40"
          ></img>

          <span className="d-none d-md-inline-block"> Mary Tan</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="user-profile-lite">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
