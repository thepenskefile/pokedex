// @flow

import React, { Fragment } from 'react';
import { Image, Container, Box, Flex, Heading, Text, Set, Icon, Tag } from 'fannypack';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type Props = {
  data: Object
};

const ItemDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Flex alignItems="center">
      <Heading>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Heading>
      <Image src={data.sprites.default} />
    </Flex>
    <Set marginBottom="20px" spacing="major-2" display="block">
      {data.fling_power && (
        <Fragment>
          <Text use="strong">Fling Power: </Text>
          {data.fling_power}
        </Fragment>
      )}
      <Text use="strong">Cost: </Text>
      {data.cost}
    </Set>
    <Set marginBottom="20px">
      {data.game_indices.map((index, i) => (
        <Tag
          key={index.generation.url.replace(/\D/g, '').substring(1)}
          backgroundColor={`generation-${index.generation.url.replace(/\D/g, '').substring(1)}`}
          size="medium"
        >
          {`gen ${index.generation.url.replace(/\D/g, '').substring(1)}`}
        </Tag>
      ))}
    </Set>
    {data.effect_entries.map((effect, i) => (
      <Text key={effect.effect} display="block">
        {effect.effect}
      </Text>
    ))}
    <Box marginTop="40px">
      <Heading use="h5">Attributes</Heading>
      {data.attributes.map((attribute, i) => (
        <Text key={attribute.name} display="block">
          <Icon
            a11yLabel="check"
            color={`generation-${data.game_indices[0].generation.url.replace(/\D/g, '').substring(1)}`}
            marginRight="5px"
            icon={faCheck}
            type="font-awesome"
          />
          {attribute.name}
        </Text>
      ))}
    </Box>
  </Container>
);

export default ItemDetailsComponent;
