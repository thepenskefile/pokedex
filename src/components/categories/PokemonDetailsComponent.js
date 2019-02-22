// @flow

import React from 'react';
import { Image, Container, Box, Text, Flex, Tag, Set, Heading, Columns, Column, palette } from 'fannypack';
import Counter from '../../ui/Counter';

type Props = {
  data: Object
};

const PokemonDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="100%" height="70vh" overflowY="scroll" overflowX="hidden">
    <Flex alignItems="flex-end">
      <Heading>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Heading>
      <Image src={data.sprites.front_default} />
    </Flex>
    <Set marginBottom="20px" spacing="major-2" display="block">
      <Text use="strong">Height: </Text>
      {data.height}
      <Text use="strong">Weight: </Text>
      {data.weight}
    </Set>
    <Set marginBottom="20px">
      {data.types.map((type, i) => (
        <Tag key={type.type.name} backgroundColor={type.type.name} size="medium">
          {type.type.name}
        </Tag>
      ))}
    </Set>
    <Box marginTop="40px">
      <Heading use="h5">Stats</Heading>
      <Columns marginTop="20px" marginBottom="20px" minBreakpoint="mobile">
        {data.stats.map((stat, i) => (
          <Column key={stat.stat.name} display="inline-block" spreadTablet={4} spreadMobile={6} spreadWidescreen={4}>
            <Counter
              percentage={stat.base_stat}
              label={stat.stat.name}
              color={data.types[0].type.name ? palette(`${data.types[0].type.name}`) : palette('normal')}
            />
          </Column>
        ))}
      </Columns>
    </Box>
    <Box marginTop="40px">
      <Heading use="h5">Sprites</Heading>
      <Columns align="center" textAlign="center">
        {Object.keys(data.sprites).map(
          (keyName, i) =>
            data.sprites[keyName] && (
              <Column
                key={data.name + '_' + keyName}
                display="inline-block"
                minBreakpoint="mobile"
                spread={3}
                spreadMobile={6}
              >
                <Image src={data.sprites[keyName]} />
                <Text display="block">{keyName.replace(/_/g, ' ')}</Text>
              </Column>
            )
        )}
      </Columns>
    </Box>
  </Container>
);

export default PokemonDetailsComponent;
