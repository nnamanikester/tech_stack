import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {Header} from './components/common';
import Libraryist from './components/LibraryList';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <>
        <Header headerText="Tech Stack" />
        <Libraryist />
      </>
    </Provider>
  );
};

export default App;
