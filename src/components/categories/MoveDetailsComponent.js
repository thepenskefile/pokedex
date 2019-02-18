// @flow

import React, { Fragment } from 'react';
import { Container, Box } from 'fannypack';

type Props = {
  data: Object
};

const MoveDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      <Box>Name: {data.name}</Box>
      <Box>accuracy: {data.accuracy}</Box>
      <Box>PP: {data.pp}</Box>
      <Box>Power: {data.power}</Box>
    </Fragment>
  </Container>
);

export default MoveDetailsComponent;
