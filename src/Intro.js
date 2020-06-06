import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import SiteInstructions from './SiteInstructions.js';
import theme from './theme';

export const readFile = (file, callback) => {
  fetch(file)
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      callback(text);
      return text;
    })
    .catch((error) => {
      console.error(error);
    });
};

const useStyles = makeStyles(() => ({
  chapter: {
    paragraph: true,
  },
}));

const Introduction = ({ markdown }) => {
  const classes = useStyles(theme);
  return (
    <>
      <ReactMarkdown className={classes.chapter} source={markdown} />
      <SiteInstructions />
    </>
  );
};

Introduction.propTypes = {
  markdown: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
export default Introduction;
