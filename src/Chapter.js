import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { ExpandingCard } from './Card.js';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js';

const useStyles = makeStyles((theme) => ({
  chapter: {
    padding: theme.spacing(2),
  },
  title: {
    ...theme.typography.h5,
    align: 'center',
    color: theme.palette.text.primary,
  },
  body: {
    ...theme.typography.body2,
    align: 'justify',
    color: theme.palette.text.primary,
  },
}));
const Chapter = ({ title, markdown, ...others }) => {
  const classes = useStyles(theme);
  return (
    <Box className={classes.chapter}>
      <ExpandingCard title={title} {...others}>
        <ReactMarkdown source={markdown} />
      </ExpandingCard>
    </Box>
  );
};

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  image_url: PropTypes.string,
};
export default Chapter;
