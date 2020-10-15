import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse  } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    background: 'rgba(0, 0, 0, 0.5)', 
    margin: '20px', 
    borderRadius: "50%",
    justifyContent: "center",
  },
  media: {
    
    alignItems: "center",
    height: 200,
    width: 200,
    borderRadius: '50%',
  },
  title: {
    fontFamily: 'Alef', 
    fontWeight: 'bold', 
    fontSize: '2rem', 
    textAlign: "center",
    color: "#fff", 
  }, 
  desc: {
    fontFamily: 'Alef',
    fontSize: '1.1rem', 
    color: "#fff",
    textAlign: "center",
  },
  content: {
    
  }
});

export default function ImageCard({ member}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={member.imageUrl}
          //{process.env.PUBLIC_URL + '/assets/germanyLandscape.jpg'}
          title="Contemplative Reptile"
        />
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
    </Card>
  );
}
