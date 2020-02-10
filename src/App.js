import * as React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
// import NotFound from './components/404';
import {Page} from './components/Page';
import {Home} from './components/Home';
import './App.css';

function buildRoutes(pages = []) {
  return pages.map(page => (
    <Route key={page.id} component={page.isFrontPage ? Home : Page} path={page.isFrontPage ? '/' : page.uri} />
  ));
}

export default () => (
  <ApolloProvider client={client}>
    <div id="App">
      <Query query={META_QUERY}>{({data}) => <Content {...data} />}</Query>
    </div>
  </ApolloProvider>
);

function Content({pages, ...props}) {
  return (
    <BrowserRouter>
      <Header {...props} />
      <Switch>
        {buildRoutes(pages?.nodes || [])}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

const client = new ApolloClient({uri: `/graphql`});

// https://docs.wpgraphql.com/getting-started/
const META_QUERY = gql`
  query META_QUERY {
    pages {
      nodes {
        content
        id
        slug
        title(format: RENDERED)
        isFrontPage
        databaseId
        uri
      }
    }
    menus(where: {id: 2}) {
      nodes {
        id
        menuId
        name
        menuItems {
          nodes {
            id
            menuItemId
            title
            url
            description
            label
            target
          }
        }
      }
    }
    generalSettings {
      url
      description
      title
      email
    }
  }
`;
