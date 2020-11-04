import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    fontFamily: 'Poppins',
  },
  chip: {
    backgroundColor: '#ffffff',
    display: 'flex',
    outlined: {
      color: '#000'
    },
    
  },
  icon: {
    borderRadius: '50%', 
    height: '20px',
    width: '20px',
  }, 
}));

export default function Chips({tags, chipStyle}) {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  
  return (
    <div className={classes.root}>
      
      {tags.map(tag => {
          return (
            <Chip 
                size={chipStyle.size}
                variant={chipStyle.variant}
                id="chip"
                clickable={false}
                className={classes.chip}
                icon={<Icon className={classes.icon} style={{backgroundColor: tag.color}}/>}
                label={tag.title}
                style= {{fontFamily: 'Poppins'}}
                onClick={handleClick}
            />     
           )
            
      })}
      </div>  
  );
}
