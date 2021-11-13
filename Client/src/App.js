import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Profile'>
              <Profile />
            </Route>
            {/* TODO: Insurance information on a separate page? */}
            {/* <Route exact path='/Profile/:id'>
              <Vote />
            </Route> */}
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
