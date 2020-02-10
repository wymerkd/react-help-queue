import React from "react";
import TicketList from "./TicketList";
import Header from "./Header";
import MyStyledComponent from "./MyStyledComponent";


function App(){
var cWholeApp = {
  textAlign: 'center'
}
  return (
    <div style = {cWholeApp}>
      <Header/>
      <TicketList/>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
