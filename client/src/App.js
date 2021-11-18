import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import UserForm from './components/User/UserForm';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import './styles/App.css';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router> 
        <StoreProvider>
          <Nav/>
          <main>            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/:id" component={UserForm} />
              <Route exact path="/insurance" component={UserForm} />
              <Route exact path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
