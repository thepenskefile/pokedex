// @flow

import React, { Fragment } from 'react';
// import { Link } from '@reach/router';
import { Container, Box } from 'fannypack';

type Props = {
  data: Object
};

const LocationDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      <Box>Name: {data.name}</Box>
      <Box>Region: {data.region.name}</Box>
    </Fragment>
  </Container>
);

export default LocationDetailsComponent;
