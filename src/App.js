import React, { Component } from 'react';
import { Box, Tag } from 'fannypack';

import './App.css';

class App extends Component {
  render() {
    return (
      <Box>
        hello in app
        <Box>
          <Tag backgroundColor="water">Water</Tag>
          <Tag backgroundColor="fire">Fire</Tag>
          <Tag backgroundColor="electric">Electric</Tag>
          <Tag backgroundColor="grass">Grass</Tag>
          <Tag backgroundColor="psychic">Psychic</Tag>
          <Tag backgroundColor="poison">Poison</Tag>
          <Tag backgroundColor="bug">Bug</Tag>
          <Tag backgroundColor="rock">Rock</Tag>
          <Tag backgroundColor="ground">Ground</Tag>
          <Tag backgroundColor="fighting">Fighting</Tag>
          <Tag backgroundColor="dark">Dark</Tag>
        </Box>
      </Box>
    );
  }
}

export default App;
