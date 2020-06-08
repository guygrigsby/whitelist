import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import theme from './theme.js';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '100%',
    maxHeight: 200,
    width: '100%',
    objectFit: 'cover',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    width: 100,
    boxShadow: 'none',
    transition: '0.2s',
    '&:hover': {
      boxShadow: '0 6px 20px 0 rgba(0,0,0,0.38)',
      transform: 'scale(1.1)',
      '& $title': {
        transition: '0.3s',
        maxHeight: 300,
        height: 'auto',
      },
    },
  },
  title: {
    height: 60,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    transition: '0.3s',
    whiteSpace: 'wrap',
  },
  text: {
    ...theme.typography.body2,
    color: 'secondary',
    align: 'justify',
  },
}));
export const MediaCard = ({ image_url, title, url }) => {
  const classes = useStyles({ color: theme.palette.primary });
  return (
    <Card className={classes.card} onClick={() => window.open(url)}>
      <img className={classes.media} alt="" src={image_url} />
      <CardContent>
        <Typography className={cx(classes.text, classes.title)}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

MediaCard.propTypes = {
  image_url: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  url: PropTypes.string,
};

export default MediaCard;
