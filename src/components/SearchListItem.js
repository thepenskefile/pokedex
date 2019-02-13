import React from 'react';
// import { Link } from '@reach/router';
import { Box, Column, Columns, styled, palette } from 'fannypack';
import { Link } from '@reach/router';

const StyledListItem = styled(Box)`
  border-bottom: 1px solid ${palette('white800')};
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 10px;
  &:hover {
    background-color: ${palette('white700')};
  }
`;

type Props = {
  index: Number,
  name: string,
  id: Number
};

const SearchListItem = ({ index, name, id }: Props) => (
  <Link to={`/pokemon/${id}`}>
    <StyledListItem>
      <Columns minBreakpoint="mobile">
        <Column spread={2}>{index}</Column>
        <Column spread={10}>{name}</Column>
      </Columns>
    </StyledListItem>
  </Link>
);

export default SearchListItem;
