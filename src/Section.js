/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import Seat from './Seat';

class Section extends React.Component {
  constructor(props) {
    super(props);
    console.log('in section:', props);
    this.state = { section: props.section };
  }
  render() {
    return (
      <div className="seatLayout">
        <div>
          Section: {this.state.section.type} Price: {this.state.section.price}
        </div>
        <div>
          {this.state.section.seats.map((s, i) => <Seat seat={s} key={i} />)}
        </div>
      </div>
    );
  }
}
export default Section;
