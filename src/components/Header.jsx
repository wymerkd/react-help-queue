import React from "react";

function Header(){
  var headerStyle = {
    backgroundColor: 'lightyellow',
    fontSize: '4rem'
  }
  var hStyle = {
    fontSize: '6rem'
  }
  var cDiv = {
    backgroundColor: 'lightyellow',
    textAlign: 'center',
    display: 'block',
    height: '400px',
    width: '40%',
    float: 'left',
    marginRight: '50px'


  }
  return (
    <div style= {cDiv}>
      <h1 style={headerStyle}><span style={hStyle}>C</span>lam Queue!</h1>
      <hr></hr>
      <h3>Clam time, dude.</h3>
      <h3>Eat clams, dude.</h3>
      <h3>Hello clam, dude.</h3>
    </div>
  );
}

export default Header;
