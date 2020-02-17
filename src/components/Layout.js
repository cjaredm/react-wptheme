import * as React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function({children, ...props}) {
  return (
    <React.Fragment>
      <Header {...props} />
      {children}
    </React.Fragment>
  );
}

const Container = styled.div`
  padding: 0 40px;
`;
