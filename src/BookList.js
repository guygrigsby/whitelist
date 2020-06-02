import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

const BookList = ({ booklist, ...o }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <List color="primary" aria-label="books to kill racism">
        {booklist.map(item => (
          <ListItem
            button
            onClick={() => {
              window.open(item.url, "_blank");
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

export default BookList;
