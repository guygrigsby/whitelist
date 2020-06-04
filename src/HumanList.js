import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HumanIcon from './HumanIcon';
import { names } from './Name';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const NameList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List color="primary" aria-label="names of black people murdered">
        {names.map((person, idx) => (
          <ListItem key={idx} button>
            <ListItemIcon>
              <HumanIcon />
            </ListItemIcon>
            <ListItemText primary={person} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default NameList;
