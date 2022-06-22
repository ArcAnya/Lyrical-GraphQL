import React from 'react';
import ReactDOM from 'react-dom';
import AppolloClient from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import SongList from './components/SongList';

const client = new AppolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
    )
  };

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
