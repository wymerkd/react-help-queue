import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  var ticketStyles = {
    backgroundColor: 'lightblue',
    fontSize: '24px',
    color: 'orange'
  }
  return (
      <div style={ticketStyles}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
