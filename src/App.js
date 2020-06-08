import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { getFromDB } from './store';
import HumanList from './HumanList';
import { names } from './Name';
import Nav from './Nav';
import ResourcePlug from './ResourcePlug.js';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core';
import { follow } from './Twitters';

const siteTitle = 'whitelist.dev';
const siteSubtitle = 'Confronting Whiteness';

const ImageCredit = () => {
  const classes = styles();
  return (
    <Link
      component="button"
      className={classes.copyright}
      variant="body2"
      color="textSecondary"
      onClick={() =>
        window.open('https://www.flickr.com/photos/number7cloud/15378166334')
      }
    >
      {`"I Can't Breath" image © Lorie Shaull. Reproduced under license.`}
    </Link>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    spacing: theme.spacing(3),
  },
  copyright: {
    textAlign: 'center',
    align: 'center',
    width: '100%',
  },
  plugcard: {
    padding: theme.spacing(3),
  },
  overrides: {
    MuiIcon: {
      colorPrimary: {
        color: '#1DA1F2',
      },
    },
  },
  twitter: {
    padding: theme.spacing(1),
  },
}));

const App = () => {
  const classes = styles();
  const [resources, setResources] = useState(null);
  const loaded = resources !== null;

  useEffect(() => {
    const go = async () => {
      setResources(await getFromDB('resources'));
      console.log('done');
    };
    go();
  }, []);

  const introText = `

Hi. My name is Guy. I am white. I don't usually say that because I think it is assumed. That's a problem. I am part of the problem when it comes to racial injustice in the US. 

What follows is a list of resources for white people on race. The whitelist.

  `;
  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Nav drawerList={<HumanList names={names} />}>
          <Box my={3} textAlign="center" justifyContent="center">
            <Typography
              gutterBottom
              variant="h4"
              color="textSecondary"
              component="h1"
            >
              {siteTitle}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="textPrimary"
            >
              {siteSubtitle}
            </Typography>
            {introText}
          </Box>
          <Grid
            container
            alignContent="flex-start"
            className={classes.gridContaier}
          >
            {follow.map((handle, idx) => {
              return (
                <Grid
                  item
                  sm
                  className={classes.plugcard}
                  key={`Twitter-${idx}`}
                >
                  <Chip
                    className={classes.twitter}
                    avatar={
                      <TwitterIcon
                        style={{ fill: '#1DA1F2' }}
                        className={classes.twitterIcon}
                      />
                    }
                    label={<Typography variant="body2">{handle}</Typography>}
                    onClick={() => window.open(`https://twitter.com/${handle}`)}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid
            container
            alignContent="flex-start"
            className={classes.gridContaier}
          >
            {loaded &&
              resources.map((resource, idx) => {
                let image = resource.image;
                if (image === undefined) {
                  image = 'assets/no_police_brutality.png';
                }
                return (
                  <Grid
                    item
                    sm
                    className={classes.plugcard}
                    key={`Chapter-${idx}`}
                  >
                    <ResourcePlug
                      key={idx}
                      image={image}
                      name={resource.name}
                      {...resource}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Nav>
      </Grid>
      <ImageCredit className={classes.copyright} />
    </>
  );
};

export default hot(App);
