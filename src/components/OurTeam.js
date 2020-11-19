import React from 'react'
import { makeStyles } from '@material-ui/core/styles'; 
import { MovieFilter } from '@material-ui/icons';
import { CssBaseline, Grid } from '@material-ui/core';
import useWindowPosition from '../hook/useWindowPosition';
import teamMembers from "../static/teamMembers";
import TeamMemberCardExpanded from './TeamMemberCardExpanded';
import TagArray from './TagArray';
import teamMemberTags from "../static/teamMemberTags";
import PageHeaderText from './PageHeaderText';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    titleWrapper: {
        margin: '3rem',
        marginBottom: '0rem',
        
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: '3rem',
        weight: '400',
        color: 'rgb(255, 143, 143,1)',
        textAlign: 'center',
    },
    card: {
        marginTop: '0',
        height: '100%',
    }
}))


export default function() {
    const classes = useStyles();  
    const checked = useWindowPosition('aboutTags');
    const header ={text: 'our team'};
    return (
        
        <div className={classes.root} id="ourTeam">
            <Grid 
                container
                spacing={2}
                justify="center"
                alignItems="stretch"
                alignContent="stretch"
            >
                <Grid item xs={12}>
                <div className>
                    <PageHeaderText header={header}/>
                </div>
                </Grid>

                {
                    teamMembers.map(member => {
                        return (
                            <Grid item md={2} sm={4} xs={6} >
                            <TeamMemberCardExpanded member={member} checked={checked} className={classes.card}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            
        </div>
    )
}