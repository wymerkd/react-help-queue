import React from "react";

function Header(){
  var headerStyle = {
    backgroundColor: 'lightyellow',
    fontSize: '4rem'
  }
  var hStyle = {
    backgroundColor: 'lightblue',
    fontSize: '6rem'
  }

  var cDiv = {
    textAlign: 'center'
  }
  return (
    <div style= {cDiv}>
      <h1 style={headerStyle}><span style={hStyle}>H</span>elp Queue!</h1>
    </div>
  );
}

export default Header;
