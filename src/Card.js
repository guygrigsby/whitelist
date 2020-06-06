import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import PropTypes from 'prop-types';
import theme from './theme.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 10,
    alignItems: 'center',
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
        //overflow: 'visible',
        //transform: 'scale(1.1)',
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
    ...theme.typography.body2,
    align: 'justify',
  },
}));

export const ExpandingCard = ({ title, startingParagraph, children }) => {
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
        <CardContent>
          <Box className={classes.body}> {startingParagraph}</Box>
        </CardContent>
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

const MediaCard = ({ image_url, title, children }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  const classes = useStyles({ color: theme.palette.primary });
  console.log('image', image_url);
  return (
    <div className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <Card className={classes.card}>
          <CardMedia classes={mediaStyles} image={image_url} />
          <CardContent>
            <Typography className={classes.title} variant={'h2'}>
              {title}
            </Typography>
            <Typography className={classes.body}>{children}</Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </div>
  );
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const RandomCard = ({ list }) => {
  let single = list[getRandomInt(list.length - 1)];
  return (
    <MediaCard
      image={single.image_url}
      text={single.text}
      author={single.author}
    />
  );
};
RandomCard.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any),
};

MediaCard.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  author: PropTypes.string,
};

export default MediaCard;
