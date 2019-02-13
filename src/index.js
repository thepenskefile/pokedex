import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { LoadsProvider } from 'react-loads';
import { Router } from '@reach/router';
import { ThemeProvider } from 'fannypack';
import App from './App';
import { theme } from './theme';
import MainWrapper from './containers/MainWrapper';
import PokemonCategoryContainer from './containers/categories/PokemonCategoryContainer';
render(
  <LoadsProvider>
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Router>
          <App path="/" />
          <PokemonCategoryContainer path="pokemon/:id" />
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
