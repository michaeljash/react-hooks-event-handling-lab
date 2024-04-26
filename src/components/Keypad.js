import React from 'react';

class Keypad extends React.Component {
  handleCHANGE(event) {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onChange={this.handleCHANGE} />
    );
  }
}

export default Keypad;
