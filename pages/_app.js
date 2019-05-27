/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { GlobalStyle } from '../css/global';
import '../lib/icons';
import theme from '../css/theme';

export default class MyApp extends App {
  componentDidMount () {
    const jssStyles = document.querySelector ('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild (jssStyles);
    }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <React.StrictMode>
          <Head>
            <title>Plainly</title>
            <meta
              key="description"
              name="description"
              content="Plainly - Take control of your flat/room search"
            />
          </Head>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <GlobalStyle />
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6">
                    Plainly
                  </Typography>
                </Toolbar>
              </AppBar>
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </React.StrictMode>
      </Container>
    );
  }
}
