import * as React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

export default function(props) {
  return (
    <Query query={PAGE_QUERY} variables={{path: props.location.pathname === '/' ? '/home' : props.location.pathname}}>
      {({data}) => {
        return <div dangerouslySetInnerHTML={{__html: data?.page?.content}}></div>;
      }}
    </Query>
  );
}

const PAGE_QUERY = gql`
  query PAGE_QUERY($path: String!) {
    page: pageBy(uri: $path) {
      id
      uri
      title(format: RAW)
      slug
      content(format: RENDERED)
    }
  }
`;
