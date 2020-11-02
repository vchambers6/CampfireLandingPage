import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SortIcon from '@material-ui/icons/Sort';
import { Link as Scroll} from 'react-scroll'

const useStyles = makeStyles({
  list: {
    width: 250,
    background: '#ff9999',
    
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: '#fff', 
    margin: '0 auto',
    fontSize:'2rem',
    flexGrow: 5,
    shadow: '2px 2px',
  },
  toolBarButtons: {
    color: '#ffffff',
    fontSize: '1rem',
    },
});

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  var toolBarItems = [["about", "about"], ["learnMore", "learn more"], ["ourTeam", "our team"], ];
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        
      <List>
        {toolBarItems.map(toolBarItem => (
            <ListItem>
                <Scroll to={toolBarItem[0]} smooth={true}>
                    <Button className={classes.toolBarButtons} style={{ftextTransform: 'none'}}>
                        {toolBarItem[1]}
                    </Button>
                </Scroll>
            </ListItem>
        ))}
       
        <ListItem>
            <Button 
                className={classes.toolBarButtons} 
                style={{textTransform: 'none'}}
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href="https://campfireconvos.com/registration";
                }}
            >
                register
            </Button>  
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)}>
                <SortIcon className={classes.icon}/>
          </Button>
          <SwipeableDrawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
        </React.Fragment>
     
    </div>
  );
}
