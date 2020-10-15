import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import teamMembers from "../static/teamMembers";
import TeamMemberCard from './TeamMemberCard';

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
                who believe in the power of connection. just testing out the text:-)
                </div>
                </Grid>

                <Grid item xs={4}>
                    <TeamMemberCard member={teamMembers[0]} />
                </Grid>

                <Grid item xs={4}>
                    <TeamMemberCard member={teamMembers[1]} />
                </Grid>

                <Grid item xs={4}>
                    <TeamMemberCard member={teamMembers[2]} />
                </Grid>

                <Grid item xs={4}>
                    <TeamMemberCard member={teamMembers[3]} />
                </Grid>

                

                <Grid item xs={4}>
                    <TeamMemberCard member={teamMembers[4]} />
                </Grid>
            </Grid>
            
        </div>
    )
}