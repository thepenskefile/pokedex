// @flow

import React, { Fragment } from 'react';
// import { Link } from '@reach/router';
import { Image, Container, Box } from 'fannypack';

type Props = {
  data: Object
};

const ItemDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      <Box>Name: {data.name}</Box>
      <Box>Fling power: {data.fling_power}</Box>
      <Box>Effect: {data.effect_entries[0].effect}</Box>
      <Image src={data.sprites.default} />
    </Fragment>
  </Container>
);

export default ItemDetailsComponent;
