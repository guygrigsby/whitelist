import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import intro from './markdown/intro.md';
import Introduction, { readFile } from './Intro';
import { getFromDB } from './store';
import HumanList from './HumanList';
import { names } from './Name';
import Nav from './Nav';
import Chapter from './Chapter';

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

const App = () => {
  const [text, setText] = useState(null);
  const [chapters, setChapters] = useState(null);
  const loaded = chapters !== null;

  useEffect(() => {
    const go = async () => {
      setChapters(await getFromDB());
      console.log('done');
    };
    go();
  }, []);

  useEffect(() => {
    readFile(intro, (val) => setText(val));
  }, []);

  const introText = text;
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
        <Grid
          container
          spacing={6}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {loaded &&
            chapters.map((chapter, idx) => (
              <Grid item xs={6} key={`Chapter-${idx}`}>
                <Chapter
                  title={chapter.title}
                  startingParagraph={chapter.summary}
                  markdown={chapter.markdown}
                  image_url={chapter.image_url}
                />
              </Grid>
            ))}
        </Grid>
        <Box p={3}>
          <Copyright />
        </Box>
      </Nav>
    </Container>
  );
};

export default hot(App);
