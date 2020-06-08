import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { MediaCard } from './Card';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  popup: {
    maxWidth: 'sm',
    maxHeight: 200,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
  },
}));

const ResourcePlug = ({ name, url, image, comment }) => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        <MediaCard
          image_url={image}
          title={name}
          comment={comment}
          url={url}
        ></MediaCard>
      </div>
    </div>
  );
};
ResourcePlug.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  comment: PropTypes.string,
  image: PropTypes.string,
};

export default ResourcePlug;
