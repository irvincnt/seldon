import React, { Component }from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Sidebar from "./sidebar";
import Home from "./home";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
    <Router>
      <Sidebar />
      <Redirect from='/' to='/home' />
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/grid' exact render={() => <h2>Grid</h2>}/>
      </Switch>
    </Router>
    );
  }
}
 
export default App;