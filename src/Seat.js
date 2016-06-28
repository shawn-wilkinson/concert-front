/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';

class Seat extends React.Component {
  constructor(props) {
    super(props);
    console.log('in seat:', props);
    this.state = { seat: props.seat };
  }
  render() {
    let seatStyle = 'seat notSold';
    if (this.state.seat.isSold) {
      seatStyle = 'seat sold';
    }
    return (
      <div className={seatStyle} >{this.state.seat.number}</div>
    );
  }
}
export default Seat;
