import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const NameList = ({ names }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List color="primary" aria-label="names of black people murdered">
        {names.map((person, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={person} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

NameList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};
export default NameList;
