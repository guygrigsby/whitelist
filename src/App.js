import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import intro from './markdown/intro.md';
import Introduction, { readFile } from './Intro';
import { getFromDB } from './store';
import HumanList from './HumanList';
import { names } from './Name';
import Nav from './Nav';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        whitelist.dev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      text: null,
      messages: [],
    };
  }

  componentDidMount() {
    readFile(intro, (val) => this.setState({ text: val }));
    getFromDB((val) => {
      console.log('adding', val, 'to', this.state.messages);
      this.setState((prevState) => prevState.messages.push(val));
    });
  }

  render() {
    const introText = this.state.text;
    const hasIntro = introText !== null && introText !== undefined;
    return (
      <Container maxWidth="lg">
        <Nav drawerList={<HumanList names={names} />}>
          <Box
            my={3}
            spacing={3}
            textAlign="center"
            alignContent="flex-start"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              whitelist.dev
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Confronting Whiteness
            </Typography>
          </Box>
          {hasIntro && <Introduction markdown={introText} />}
          <Box p={3}>
            <Copyright />
          </Box>
        </Nav>
      </Container>
    );
  }
}

export default hot(App);
