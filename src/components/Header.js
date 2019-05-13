import React, { Component } from "react";

import M from 'materialize-css';

class Header extends Component {


 componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render() {
    return (
      <div className = "center">
        <h1>Cat Clicker app</h1>
      </div>
    );
  }
}
export default Header;
