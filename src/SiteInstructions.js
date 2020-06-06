import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Chapter from './Chapter.js';
import theme from './theme.js';

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(1),
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
    padding: theme.spacing(1),
  },
}));
export const ExampleChapter = () => {
  const start = 'You will see cards like this. These are my stories.';
  const lorum = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`;
  const image_url =
    'https://firebasestorage.googleapis.com/v0/b/whitelist-279401.appspot.com/o/site_images%2Fmask_small.jpg?alt=media';
  return (
    <Chapter
      title={'Sample Chapter'}
      startingParagraph={start}
      markdown={lorum}
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
  return (
    <div className={classes.root}>
      <Box className={classes.title}>How to Use this Site</Box>
      <Box paragraph="true" className={classes.body}>
        {howto}
      </Box>
    </div>
  );
};

export default SiteInstructions;
