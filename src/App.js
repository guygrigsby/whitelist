import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Introduction from './Intro.js';
import HumanList from './HumanList.js';
import { names } from './Name';
import Nav from './Nav';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://twitter.com/SpikeLeeJoint/status/1267269978320826368"
      >
        whitelist.dev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    //              <BookList booklist={[...ReadingList]} />
  );
};

const App = () => {
  return (
    <Container maxWidth="md">
      <Nav drawerList={<HumanList names={names} />}>
        <Box
          my={3}
          spacing={3}
          textAlign="center"
          alignContent="flex-start"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" component="h2" gutterBottom>
            whitelist.dev
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Whitelists and Blacklists are not for People
          </Typography>
        </Box>
        <Grid container p={3}>
          <Grid item xs={12} p={4}>
            <Introduction />
          </Grid>
          <Grid item xs={12}>
            <Box p={3}>
              <Copyright />
            </Box>
          </Grid>
        </Grid>
      </Nav>
    </Container>
  );
};
export default hot(App);
