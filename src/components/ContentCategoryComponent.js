import React from 'react';
// import { Link } from '@reach/router';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';
import { Tag, Set, Container } from 'fannypack';

const ContentCategoryContainer = () => (
  <Container textAlign="center">
    <Set spacing="major-1">
      {Object.keys(CONTENT_CATEGORY_TYPES).map(category => (
        <Tag key={category}>{CONTENT_CATEGORY_TYPES[category]}</Tag>
      ))}
    </Set>
  </Container>
);

export default ContentCategoryContainer;
