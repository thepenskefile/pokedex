// @flow

import React, { Fragment } from 'react';
// import { Link } from '@reach/router';
import { Container, Box } from 'fannypack';

type Props = {
  data: Object
};

const BerryDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      <Box>Name: {data.name}</Box>
      <Box>Growth Time: {data.growth_time}</Box>
      <Box>Max Harvest: {data.max_harvest}</Box>
      <Box>Size: {data.size}</Box>
      <Box>Smoothness: {data.smoothness}</Box>
      <Box>Soil dryness: {data.soil_dryness}</Box>
    </Fragment>
  </Container>
);

export default BerryDetailsComponent;
