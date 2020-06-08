import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
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
    align: 'center',
    spacing: theme.spacing(3),
  },
  copyright: {
    textAlign: 'center',
    align: 'center',
    alignItems: 'center',
    width: '100%',
  },
  plugcard: {
    padding: theme.spacing(1),
    direction: 'row',
    justify: 'space-between',
    alignItems: 'flex-start',
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

I am a dude that works in tech. I am white. I don't usually say that because I think it is assumed. That's a problem. I am part of the problem. How can I stop assuming white? How can we 

What follows is a list of resources for white people on race. The whitelist.

  `;
  return (
    <>
      <Container maxWidth="md">
        <Nav
          contact={() => window.open('mailto:devs@whitelist.dev')}
          drawerList={<HumanList names={names} />}
        >
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
            <br />
            <Divider />
            <br />
            <Typography color="textSecondary">{introText}</Typography>
          </Box>

          <Grid container alignContent="flex-start" justify="space-around">
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
          <Grid
            container
            alignContent="flex-start"
            justify="center"
            className={classes.chipContaier}
          >
            <Grid item align="center">
              <Box p={1}>
                <Typography gutterBottom color="textSecondary" variant="h6">
                  {'Learn from Black People'}
                </Typography>
              </Box>
              <Box p={1}>
                <Typography gutterBottom color="textSecondary">
                  {
                    "These are some black voices that have helped me understand. Don't go ask them for help. Follow them and listen."
                  }
                </Typography>
              </Box>
            </Grid>
            {follow.map((handle, idx) => {
              return (
                <Grid
                  item
                  align="center"
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
          <br />
          <Grid container align="center" justify="center" display="flex">
            <Grid xs={12} item>
              <Divider />
            </Grid>

            <Grid xs={12} item>
              <ImageCredit className={classes.copyright} />
            </Grid>
          </Grid>
        </Nav>
      </Container>
    </>
  );
};

export default hot(App);
