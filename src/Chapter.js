import React from 'react';
import PropTypes from 'prop-types';
import { ExpandingCard } from './Card.js';
import ReactMarkdown from 'react-markdown';
const Chapter = ({ title, markdown, ...others }) => {
  return (
    <ExpandingCard title={title} {...others}>
      <ReactMarkdown source={markdown} />
    </ExpandingCard>
  );
};

Chapter.propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  image_url: PropTypes.string,
};
export default Chapter;
