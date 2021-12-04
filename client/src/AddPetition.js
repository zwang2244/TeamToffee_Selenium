import React, { Component } from 'react';
import ResponsiveAppBar from './components/NavigationBar/ResponsiveAppBar';
import Form from './components/Form/Form';
import { Container } from '@material-ui/core';

class MyHome extends Component{

    render() {
        return (
            <Container style={{"margin-top": "150px"}} maxWidth="sm">
                <ResponsiveAppBar />
                <Form currentId={0}  />
            </Container>
          );
    }
 
};

export default MyHome;
