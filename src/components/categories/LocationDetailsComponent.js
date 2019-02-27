// @flow

import React from 'react';
import { Container, Flex, Heading, Set, Text, Tag } from 'fannypack';

type Props = {
  data: Object
};

const LocationDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Flex alignItems="flex-start" marginBottom="10px">
      <Heading>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Heading>
    </Flex>
    {data.region && (
      <Set marginBottom="20px" spacing="major-2" display="block">
        <Text use="strong">Region: </Text>
        {data.region.name}
      </Set>
    )}

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
  </Container>
);

export default LocationDetailsComponent;
