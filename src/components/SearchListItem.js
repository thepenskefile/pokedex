import React from 'react';
// import { Link } from '@reach/router';
import { Box, Column, Columns, styled, palette } from 'fannypack';
import { Link } from '@reach/router';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';

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
  id: Number,
  category: string
};

const SearchListItem = ({ index, name, id, category }: Props) => (
  <Link to={`/${CONTENT_CATEGORY_TYPES[category]}/${id}`}>
    <StyledListItem>
      <Columns minBreakpoint="mobile">
        <Column spread={2}>{index}</Column>
        <Column spread={10}>{name.charAt(0).toUpperCase() + name.slice(1)}</Column>
      </Columns>
    </StyledListItem>
  </Link>
);

export default SearchListItem;
