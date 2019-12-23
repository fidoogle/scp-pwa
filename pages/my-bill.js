import React from 'react';
import UseStyles from '../components/styles';
import { Box, Chip, Grid, Paper, Typography } from '@material-ui/core';
import Nav from '../components/nav'

export default function NavPrimary() { 
    const classes = UseStyles();

    return (
        <>
            <Nav/>
            <div className={classes.root}>
                <Grid 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"
                    spacing={2}
                >
                    <Grid item xs={12} sm={4}
                        container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-start"
                        spacing={2}
                    >
                        <div className={classes.title}>Balance Due</div>
                        <div>
                            <img src="/bill-left.PNG"/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <div className={classes.title}>Monthly Usage</div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}