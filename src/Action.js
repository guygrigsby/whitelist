import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  inline: {
    display: 'inline',
  },
}));

const Action = ({ words }) => {
  const classes = useStyles(theme);
  return <Box className={classes.root}></Box>;
};
Action.propTypes = {
  words: PropTypes.string,
};

export default Action;
