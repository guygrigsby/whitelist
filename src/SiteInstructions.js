import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chapter from './Chapter.js';
import theme from './theme.js';

const useStyles = makeStyles((theme) => ({
  chapter: {
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    padding: theme.spacing(5),
  },
  title: {
    ...theme.typography.h5,
    textAlign: 'center',
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
  },
  body: {
    ...theme.typography.body2,
    align: 'justify',
    color: theme.palette.text.primary,
  },
}));
export const ExampleChapter = ({ title, startingParagraph, words }) => {
  const classes = useStyles(theme);
  const image_url =
    'https://firebasestorage.googleapis.com/v0/b/whitelist-279401.appspot.com/o/site_images%2Fmask_small.jpg?alt=media';
  return (
    <Chapter
      className={classes.chapter}
      title={title}
      startingParagraph={startingParagraph}
      markdown={words}
      image_url={image_url}
    />
    //
  );
};

ExampleChapter.propTypes = {
  title: PropTypes.string,
  words: PropTypes.string,
  startingParagraph: PropTypes.string,
};
const howto = `This site is meant to be like a magazine. You can flip around and find
        things that interest you. There is no order or "right" way to use it.`;

const SiteInstructions = () => {
  const classes = useStyles(theme);
  const start = 'You will see cards like this. These are my stories.';
  const md = 'They will vary in look, content and functionality. ';
  const s2 = `Hi. My name is Guy. I grew up in small town Colorado and have lived in Denver for almost 15 years. I am white. I don't usually say that because I assume that it is assumed. Which leads me to why we are here. I want to talk about my experiences with race.`;
  const lorum = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;
  return (
    <>
      <Box className={classes.title}>How to Use this Site</Box>
      <Box paragraph className={classes.body}>
        {howto}
      </Box>
      <Grid container>
        <Grid item xs={6}>
          <ExampleChapter
            title={'Sample'}
            words={md}
            startingParagraph={start}
          />
        </Grid>
        <Grid item xs={6}>
          <ExampleChapter
            title={'Longer Sample'}
            startingParagraph={s2}
            words={lorum}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SiteInstructions;
