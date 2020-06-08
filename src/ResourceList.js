import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PropTypes from 'prop-types';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const ResourceList = ({ list }) => {
  const classes = useStyles(theme);
  return (
    <Box className={classes.root}>
      <List color="primary">
        {list.map((item, idx) => (
          <ListItem
            key={idx}
            button
            onClick={() => {
              window.open(item.url, '_blank');
            }}
          >
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.comment} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
ResourceList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};

export default ResourceList;
