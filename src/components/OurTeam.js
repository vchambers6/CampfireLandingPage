import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import teamMembers from "../static/teamMembers";
import TeamMemberCard from './TeamMemberCard';
import TagArray from './TagArray';
import teamMemberTags from "../static/teamMemberTags";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        // justifyContent: 'center', 
        // alignItems: 'center', 
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column', 
        },
    },
    titleWrapper: {
        margin: '3rem',
    },

    title: {
        fontFamily: 'Alef',
        fontSize: '6rem',
        margine: '-1rem',
        color: 'white',
    },
}))


export default function() {
    const classes = useStyles();  
    const checked = useWindowPosition('aboutTags');
    return (
        
        <div className={classes.root} id="ourTeam">
            <Grid 
                container
                spacing={6}
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12}>
                <div className={classes.titleWrapper}>
                    <h1 className={classes.title}>our team</h1>
                </div>
                </Grid>

                {
                    teamMembers.map(member => {
                        return (
                            <Grid item md={4} sm={6} xs={12}>
                            <TeamMemberCard member={member} checked={checked}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </div>
    )
}