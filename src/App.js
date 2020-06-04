import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import 'fontsource-roboto';
import Introduction from './Intro.js';
import NameList from './HumanList.js';

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
      <Box
        my={8}
        p={3}
        spacing={3}
        textAlign="center"
        alignContent="flex-start"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          whitelist.dev
        </Typography>
        <Typography variant="h6" color="textSecondary">
          We don't have to blacklist white people to whitelist black people
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Box p={4}>
              <Introduction />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <NameList />
          </Grid>
          <Grid container item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default hot(App);
