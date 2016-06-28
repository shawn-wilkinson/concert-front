/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';

class Venue extends React.Component {
  constructor(props) {
    super(props);
    this.cb = props.cb;
    this.update = this.update.bind(this);
  }
  update() {
    const numSeats = this.refs.numSeats.value;
    const seatType = this.refs.seatType.value;
    const seatPrice = this.refs.seatPrice.value;
    this.cb(numSeats, seatType, seatPrice);
    $('.seatInput').val('');
  }

  render() {
    return (
      <div className="venue">
        <h2>Seats</h2>
        <fieldset className="form-group venueFieldInput">
          <label> Number: </label>
          <input ref="numSeats" type="text" className="seatInput" />
        </fieldset>
        <fieldset className="form-group venueFieldInput">
          <label> Type: </label>
          <input ref="seatType" type="text" className="seatInput" />
        </fieldset>
        <fieldset className="form-group venueFieldInput">
          <label> Price: $</label>
          <input ref="seatPrice" type="text" className="seatInput" />
        </fieldset>
        <fieldset className="form-group venueButton">
          <button onClick={this.update}>Create Seats</button>
        </fieldset>
      </div>
    );
  }
}
export default Venue;
