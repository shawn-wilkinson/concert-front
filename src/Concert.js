/* eslint-disable func-names */
/* eslint-disable no-console */
import React from 'react';
import Venue from './Venue';
import Section from './Section';

class Concert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sections: [] };
    this.updateVenue = this.updateVenue.bind(this);
  }
  componentWillMount() {
    console.log('Component Will Mount...');
    fetch('http://localhost:3333/sections')
    .then(response => response.json())
    .then(sections => this.setState({ sections }));
  }
  updateVenue(numSeats, type, price) {
    console.log('In Concert Update. Seats:', numSeats, 'Type: ', type, 'Price:', price);
    const data = { numSeats, type, price };
    debugger;
    fetch('http://localhost:3333/sections', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(section => {
      console.log('updateVenue, 2nd promise section:', section, 'this.state:', JSON.stringify(this.state));
      this.state.sections.push(section);
      this.setState({ sections: this.state.sections });
    });
  }
  render() {
    console.log('Concert has rendered');
    return (
      <div>
        <Venue cb={this.updateVenue} />
        {this.state.sections.map((n, i) => <Section section={n} key={i} />)}
      </div>
    );
  }
}
export default Concert;
