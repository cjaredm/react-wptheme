import * as React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider, Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Page from './pages/Page';
import StyleGuide from './components/StyleGuide';
import './App.scss';

function buildRoutes(pages = []) {
  return pages.map(page => {
    return <Route key={page.id} component={Page} path={page.uri} />;
  });
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
      <Layout {...props}>
        <Switch>
          <Route component={StyleGuide} path="/style-guide" />
          {buildRoutes(pages?.nodes || [])}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

const client = new ApolloClient({uri: `/graphql`});

// https://docs.wpgraphql.com/getting-started/
const META_QUERY = gql`
  query META_QUERY {
    pages {
      nodes {
        id
        isFrontPage
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
    }
  }
`;
