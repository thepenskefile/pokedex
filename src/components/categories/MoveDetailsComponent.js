// @flow

import React from 'react';
import { Container, Box, Flex, Heading, Columns, Column, Set, Tag, Text, palette } from 'fannypack';
import Counter from '../../ui/Counter';

type Props = {
  data: Object
};

const MoveDetailsComponent = ({ data }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Flex alignItems="center" marginBottom="10px">
      <Heading>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Heading>
    </Flex>
    <Set marginBottom="20px" spacing="major-2" display="block">
      <Text use="strong">Contest type: </Text>
      {data.contest_type.name}
      <Text use="strong">Damage class: </Text>
      {data.damage_class.name}
    </Set>
    <Set marginBottom="20px">
      <Tag key={data.type.name} backgroundColor={data.type.name} size="medium">
        {data.type.name}
      </Tag>
    </Set>
    <Box marginTop="40px">
      <Columns marginTop="20px" marginBottom="20px" minBreakpoint="mobile">
        {data.accuracy && (
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter percentage={data.accuracy} label={'Accuracy'} color={palette(data.type.name)} />
          </Column>
        )}
        {data.pp && (
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter percentage={data.pp} label={'PP'} color={palette(data.type.name)} />
          </Column>
        )}
        {data.power && (
          <Column display="inline-block" spread={2} spreadTablet={4} spreadMobile={6} spreadWidescreen={3}>
            <Counter percentage={data.power} label={'Power'} color={palette(data.type.name)} />
          </Column>
        )}
      </Columns>
    </Box>
  </Container>
);

export default MoveDetailsComponent;
