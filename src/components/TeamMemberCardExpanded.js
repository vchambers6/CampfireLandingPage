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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
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
    marginLeft: 'auto',
      marginRight: 'auto',
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
    marginBottom: '-20px', 
  }, 
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandContent: {
    padding: '5px',
  },
  bio: {
    fontSize: '1rem',
    textAlign: "center",
    color: "#fff",
    padding: '10px',
  },
  tagArray: {
    marginBottom: '10px', 
  }
}));

export default function ImageCard({ member, checked}) {
  const classes = useStyles();
  const chipStyle = {size: 'small', border: '#000', variant: 'default'};
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          </CardContent>
        </Grid>
      </Grid>
      <CardActions>
        <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{fontSize: '2rem'}}/>
          </IconButton>
      </CardActions> 
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid
          container
          alignItems="center"
          justifyContent= "center"
          justify="center"
          className={classes.expandContent}
        >
          <Grid item xs={12}>
            <Typography variant="body1" color="textSecondary" component="p" className={classes.bio}>
              {member.bio}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.tagArray}>
            <TagArray tags={member.tags} size="small" chipStyle={chipStyle} />
          </Grid>
        </Grid>
      </Collapse>    
    </Card>
    </Collapse>
  );
}
