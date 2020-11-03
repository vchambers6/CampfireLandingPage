import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CssBaseline, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse  } from '@material-ui/core';
import TagArray from './TagArray';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    background: 'linear-gradient(45deg, #ff9999 30%, #ff9933 90%)', 
    // prev gradient color #FF8E53 
    //margin: '10px', 
    borderRadius: 15,
    boxShadow: '0 4px 7px 3px rgba(255, 142, 164, 0.3)',
    justifyContent: "center",
    alignItems: "center",
    fontFamily: 'Poppins', 
    textAlign: "center",
    color: "#fff", 
  },
  media: {
    marginTop: '10px',
    justifyItems: 'center',
    height: 100,
    width: 100,
    objectFit: 'cover',
    borderRadius: 1,
    position: 'relative',
    display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
  },
  title: {
    fontWeight: 'bold', 
    fontSize: '2rem', 
    
    
  }, 
  bio: {
    fontSize: '0.9rem',
    textAlign: "center",
    color: "#fff",
    marginBottom: '-10px',
  },
  tagArray: {
    marginBottom: '10px', 
  }
});

export default function ImageCard({ member, checked}) {
  const classes = useStyles();
  const chipStyle = {size: 'small', border: '#000', variant: 'default'}

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} >

    <Card className={classes.root}>
      <Grid
        container
        alignItems="center"
        justifyContent= "center"
        justify="center"
      >
        <Grid item xs={12}>
          <CardMedia
            className={classes.media}
            image={member.imageUrl}
            //{process.env.PUBLIC_URL + '/assets/germanyLandscape.jpg'}
          />
        </Grid>
        <Grid item xs={12}>
          <CardContent className={classes.content}>
            <Typography 
              gutterBottom variant="h5" 
              component="h1" 
              className={classes.title}
            >
              {member.name}
            </Typography>

            <Typography variant="body1" color="textSecondary" component="p" className={classes.bio}>
              {member.bio}
            </Typography>

          </CardContent>
        </Grid>

        <Grid item xs={12} className={classes.tagArray}>
            <TagArray tags={member.tags} size="small" chipStyle={chipStyle} />
        </Grid>
      </Grid>     
    </Card>
    </Collapse>
  );
}
