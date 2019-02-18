import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { LoadsProvider } from 'react-loads';
import { Router } from '@reach/router';

import { ThemeProvider } from 'fannypack';
import App from './App';
import { theme } from './theme';
import MainWrapper from './containers/layout/MainWrapper';
import PokemonCategoryContainer from './containers/categories/PokemonCategoryContainer';
import BerriesCategoryContainer from './containers/categories/BerriesCategoryContainer';
import ItemsCategoryContainer from './containers/categories/ItemsCategoryContainer';
import LocationsCategoryContainer from './containers/categories/LocationsCategoryContainer';
import MovesCategoryContainer from './containers/categories/MovesCategoryContainer';

render(
  <LoadsProvider>
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Router>
          <App path="/" />
          <PokemonCategoryContainer path="pokemon/:id" />
          <BerriesCategoryContainer path="berries/:id" />
          <ItemsCategoryContainer path="items/:id" />
          <LocationsCategoryContainer path="locations/:id" />
          <MovesCategoryContainer path="moves/:id" />
        </Router>
      </MainWrapper>
    </ThemeProvider>
  </LoadsProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
