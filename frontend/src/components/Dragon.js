import React, { Component } from 'react';
// import Generation from './Generation';
import { Button } from 'react-bootstrap';

import DragonAvatar from './DragonAvatar';

const DEFAULT_DRAGON = {
  dragonId: '',
  generationId: '',
  nickname: '',
  birthdate: '',
  traits: []
};

class Dragon extends Component {
  state = {
    dragon: DEFAULT_DRAGON
  };

  componentDidMount() {
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
      .then(response => response.json())
      .then(json => this.setState({ dragon: json.dragon }))
      .catch(error => console.error('error', error));
  };

  render() {
    const { generationId, dragonId, traits } = this.state.dragon;

    return (
      <div>
        <Button style={{ marginRight: '10px' }} onClick={this.fetchDragon}>
          New Dragon
        </Button>
        <span>G{generationId}.</span>
        <span>I{dragonId}. </span>
        {traits.map(trait => trait.traitValue).join(', ')}
      </div>
    );
  }
}

export default Dragon;
