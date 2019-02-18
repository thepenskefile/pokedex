import React from 'react';
// import { Link } from '@reach/router';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';
import { Button, Set, Container } from 'fannypack';

type Props = { selectCategory: Function };

const ContentCategoryContainer = ({ selectCategory }: Props) => (
  <Container textAlign="center">
    <Set spacing="major-1">
      {Object.keys(CONTENT_CATEGORY_TYPES).map(category => (
        <Button key={category} size="small" onClick={() => selectCategory(category)}>
          {CONTENT_CATEGORY_TYPES[category].toUpperCase()}
        </Button>
      ))}
    </Set>
  </Container>
);

export default ContentCategoryContainer;
