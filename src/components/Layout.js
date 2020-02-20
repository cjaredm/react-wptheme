import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function({children, ...props}) {
  return (
    <React.Fragment>
      <Header {...props} />
      <Container>{children}</Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 40px;
`;
