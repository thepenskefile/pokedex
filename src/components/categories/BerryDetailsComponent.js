// @flow

import React from 'react';
import { Container, Box, Image, Flex, Heading, Set, Text, Columns, Column, Tag, palette } from 'fannypack';
import Counter from '../../ui/Counter';

type Props = {
  data: Object
};

const MAX_BERRY_SIZE = 250;
const MAX_BERRY_SMOOTHNESS = 85;

const BerryDetailsComponent = ({ data }: Props) => {
  return (
    <Container textAlign="left" marginLeft="10px" width="96%">
      <Flex alignItems="center">
        <Heading>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Heading>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${data.item.name}.png`} />
      </Flex>
      <Set marginBottom="20px" spacing="major-2" display="block">
        <Text use="strong">Growth time: </Text>
        {data.growth_time}
        <Text use="strong">Max harvest: </Text>
        {data.max_harvest}
      </Set>
      <Set marginBottom="20px">
        {data.flavors.map(
          (flavor, i) =>
            flavor.potency > 0 && (
              <Tag key={flavor.flavor.name} backgroundColor={flavor.flavor.name} size="medium">
                {flavor.flavor.name}
              </Tag>
            )
        )}
      </Set>
      <Box marginTop="40px">
        <Columns marginTop="20px" marginBottom="20px" minBreakpoint="mobile">
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter
              percentage={Math.round((data.size / MAX_BERRY_SIZE) * 100)}
              label={'size'}
              color={data.flavors[0].flavor.name ? palette(`${data.flavors[0].flavor.name}`) : palette('normal')}
            />
          </Column>
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter
              percentage={Math.round((data.smoothness / MAX_BERRY_SMOOTHNESS) * 100)}
              label={'smoothness'}
              color={data.flavors[0].flavor.name ? palette(`${data.flavors[0].flavor.name}`) : palette('normal')}
            />
          </Column>
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter
              percentage={data.soil_dryness}
              label={'soil dryness'}
              color={data.flavors[0].flavor.name ? palette(`${data.flavors[0].flavor.name}`) : palette('normal')}
            />
          </Column>
        </Columns>
      </Box>
    </Container>
  );
};

export default BerryDetailsComponent;
