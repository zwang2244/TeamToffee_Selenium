import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts';
import useStyles from '../../styles';
import ResponsiveAppBar from '../NavigationBar/ResponsiveAppBar';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  console.log(currentId);
  return (
    
    <Container maxWidth="lg">
      <ResponsiveAppBar/>
      <Grow in>
        <Container style={{"margin-top": "150px"}}>
          <Grid direction='row' container spacing={4} justify="space-between">
          
            <Grid container item sm={6}>
            <Typography variant="h3" component="div" gutterBottom style={{"color":"white"}}>
                My Petition
            </Typography>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            
            <Grid container item sm={6}>
            <Typography variant="h3" component="div" gutterBottom style={{"color":"white"}}>
                My Vote
            </Typography>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
