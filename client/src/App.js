import React, {Component} from "react";
// import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from './Home';
import DescriptionPage from './Description'
import MyHome from './MyHome'
import AddPetition from './AddPetition'

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" 
                    component={HomePage}/>
                    <Route exact path="/description" 
                    component={DescriptionPage}/>
                    <Route exact path="/myhome"
                    component={MyHome}/>
                    <Route exact path="/add"
                    component={AddPetition}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
