import * as React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

export function Home(props) {
  console.log(props);
  return <div dangerouslySetInnerHTML={{__html: props.content}}></div>;
}

const HOME_QUERY = gql`
  query HOME_QUERY {
    pageBy(uri: "/home") {
      id
      uri
      title(format: RAW)
      slug
      content(format: RENDERED)
    }
  }
`;
