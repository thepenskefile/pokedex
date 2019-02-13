// @flow

import React, { Fragment } from 'react';
// import { Link } from '@reach/router';
import { Image, Container, Box } from 'fannypack';

type Props = {
  data: Object
};

const SearchResultsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      <Box>Name: {data.name}</Box>
      <Box>Height: {data.height}</Box>
      <Box>Weight: {data.weight}</Box>
      <Image src={data.sprites.front_default} />
    </Fragment>
  </Container>
);

export default SearchResultsComponent;
