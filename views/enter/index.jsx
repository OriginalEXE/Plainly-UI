import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import * as Styled from './style';

const EnterView = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Typography
          gutterBottom
          variant="h2"
          component="h1"
        >
          👋 Welcome
        </Typography>
      </Container>
    </Styled.Wrapper>
  );
};

EnterView.displayName = 'EnterView';

export default EnterView;
