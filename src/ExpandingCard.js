import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import theme from './theme.js';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: '1 1 auto',
    minWidth: 300,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
  media: {
    height: 300,
    width: '100%',
  },
  collapse: {
    //backgroundColor: theme.palette.secondary.main,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',

    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandButton: {
    color: theme.palette.type === 'dark' ? '#FFFFFF' : '#000000',
  },
  card: {
    overflow: 'hidden',
    borderRadius: 10,
    boxShadow: 'none',
    transition: '0.2s',
    '&:hover': {
      boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      '& $header': {
        overflow: 'visible',
        transform: 'scale(1.1)',
        //boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      },
    },
  },
  header: {
    transition: '0.3s',
    width: '100%',
    color: theme.palette.type === 'dark' ? '#000000' : '#FFFFFF',
    backgroundColor: theme.palette.type === 'dark' ? '#FFFFFF' : '#000000',
    padding: theme.spacing(2),
  },
  title: {
    ...theme.typography.h5,
    textAlign: 'center',
  },

  page: {
    transition: '0.3s',
    width: '100%',
    backgroundColor: theme.palette.type === 'dark' ? '#000000' : '#FFFFFF',
  },
  body: {
    ...theme.typography.body1,
    align: 'justify',
  },
}));
const ExpandingCard = ({ title, startingParagraph, children }) => {
  const classes = useStyles(theme);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className={clsx(classes.root, classes.card)}
      onClick={handleExpandClick}
    >
      <Box className={clsx(classes.title, classes.header)}>{title}</Box>
      <Box className={classes.page}>
        <CardContent className={classes.body}>{startingParagraph}</CardContent>
        {children !== undefined ? (
          <>
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="more"
              >
                <ExpandMoreIcon className={classes.expandButton} />
              </IconButton>
            </CardActions>
            <Collapse
              className={classes.collapse}
              in={expanded}
              timeout="auto"
              unmountOnExit
            >
              <CardContent className={classes.body}>{children}</CardContent>
            </Collapse>
          </>
        ) : null}
      </Box>
    </Card>
  );
};

ExpandingCard.propTypes = {
  title: PropTypes.string,
  startingParagraph: PropTypes.string,
  children: PropTypes.element,
  author: PropTypes.string,
};

export default ExpandingCard;
