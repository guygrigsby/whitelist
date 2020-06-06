import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from 'react-markdown';
import SiteInstructions from './SiteInstructions.js';

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

const Introduction = ({ markdown }) => {
  return (
    <>
      <Typography align="justify">
        <ReactMarkdown source={markdown} />
      </Typography>
      <SiteInstructions />
    </>
  );
};

Introduction.propTypes = {
  markdown: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
export default Introduction;
