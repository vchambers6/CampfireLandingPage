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
    maxWidth: 400,
    background: 'rgba(255, 255, 255, 0.5)', 
    margin: '20px', 
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    width: '60%',
    margin: '25px',
    height: 200,
    borderRadius: '50%',
  },
  title: {
    fontFamily: 'Alef', 
    fontWeight: 'bold', 
    fontSize: '2rem', 
    textAlign: "center",
    color: "#000", 
  }, 
  desc: {
    fontFamily: 'Alef',
    fontSize: '1.1rem', 
    color: "#000",
    textAlign: "center",
  },
  content: {
    
  },
  tagArray: {
    marginBottom: '30px', 
  }
});

export default function ImageCard({ member, memberTags}) {
  const classes = useStyles();

  return (
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
            <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
              {member.description}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} className={classes.tagArray}>
            <TagArray tags={member.tags} />
        </Grid>
      </Grid>     
    </Card>
  );
}
