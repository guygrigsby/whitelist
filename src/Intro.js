// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { useState, useEffect, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import intro from './markdown/intro.md';
import ReactMarkdown from 'react-markdown';

const Introduction = () => {
  const [text, setText] = useState[null];
  const loaded = text !== null;

  const memoizedSetText = useMemo(() => {
    fetch(intro)
      .then((res) => res.text())
      .then((t) => {
        setText(t);
      });
  }, [setText]);

  useEffect(() => {
    if (!loaded) {
      memoizedSetText();
    }
  }, [loaded, memoizedSetText]);

  return (
    <Typography variant="body2" color="textSecondary" align="justify">
      <ReactMarkdown>{text}</ReactMarkdown>
    </Typography>
  );
};

export default Introduction;
