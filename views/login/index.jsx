import React from 'react';
import * as Styled from './style.js';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const LoginView = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.HeaderTitle
          variant="h3"
          component="h1"
        >
          Welcome to Plainly 👋
        </Styled.HeaderTitle>
        <Styled.LoginContent>
          <Grid
            container
            justify="space-evenly"
          >
            <Card>
              <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
              >
                Placeholder for login buttons
              </Typography>
            </Card>
            <Card>
              <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
              >
                Placeholder for login info
              </Typography>
            </Card>
          </Grid>
        </Styled.LoginContent>
      </Container>
    </Styled.Wrapper>
  )
}

export default LoginView;
