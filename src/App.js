import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom";
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';


function App() {
  return (
    <Router>
      <main>
        {/* Navbar */}
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/recipes' exact component={Recipes}/>
        <Route path='/recipes/:id' exact component={SingleRecipe}/>
        <Route component={Default}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
