import React, { useState } from 'react';
// import { Link } from '@reach/router';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';
import { Menu, Flex } from 'fannypack';

type Props = { selectCategory: Function };

const ContentCategoryComponent = ({ selectCategory }: Props) => {
  const [selectedCategory, setCategory] = useState(CONTENT_CATEGORY_TYPES.pokemon);

  function handleOnClickCategory(category) {
    setCategory(category);
    selectCategory(category);
  }
  return (
    <Flex justifyContent="center">
      <Menu isHorizontal>
        <Menu.Group>
          {Object.keys(CONTENT_CATEGORY_TYPES).map(category => (
            <Menu.Item
              key={category}
              size="small"
              isActive={selectedCategory === category}
              onClick={() => handleOnClickCategory(category)}
            >
              {CONTENT_CATEGORY_TYPES[category].toUpperCase()}
            </Menu.Item>
          ))}
        </Menu.Group>
      </Menu>
    </Flex>
  );
};

export default ContentCategoryComponent;
