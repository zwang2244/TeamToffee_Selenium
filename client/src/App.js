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
class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" 
                    component={HomePage}/>
                    <Route exact path="/description" 
                    component={DescriptionPage}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
