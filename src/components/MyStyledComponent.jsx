import React from 'react';

function MyStyledComponent(props) {
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '100px',
    display: 'inline-block',
    marginTop: '20px',
    width: '100%',
    float: 'left'
  }
  return (
    <div style={myStyledComponentStyles}>
      <h1>Hey, I'm a component</h1>
      <h2>But there's something different about me...</h2>
      <h3>Unlike other components you have worked with thus far....</h3>
      <h4>I also include custom CSS styles!</h4>
      <p>Pretty cool, right</p>
    </div>
  );
}

export default MyStyledComponent;
