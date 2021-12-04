import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';
import ResponsiveAppBar from './components/NavigationBar/ResponsiveAppBar';
import {Link} from 'react-router-dom'

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
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Home;
