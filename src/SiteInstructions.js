import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Chapter from './Chapter.js';
import theme from './theme.js';

const useStyles = makeStyles(() => ({
  root: {},
  title: {
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  body: {
    ...theme.typography.body1,
    align: 'justify',
    color: theme.palette.text.primary,
  },
}));
export const ExampleChapter = () => {
  const start =
    'You will see cards like this. I call them chapters. Each one is a part of are my story.';
  const lorum = `Some of them are longer`;
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
      <Box className={classes.title}>
        <Typography
          variant="h5"
          color="textSecondary"
          component="h1"
          gutterBottom
        >
          How to Use this Site
        </Typography>
      </Box>
      <Box paragraph="true" className={classes.body}>
        {howto}
      </Box>
    </div>
  );
};

export default SiteInstructions;
