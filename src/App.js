import React from 'react'
import './App.css';
import Grid from './components/Grid';
import Navigation from './components/Navigation';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import ServicesPage from './components/ServicesPage';
import Individual from './components/Individual';
import Couples from './components/Couples';
import Group from './components/Group';
import Workshops from './components/Workshops';
import AboutTherapy from './components/AboutTherapy';
import Fee from './components/Fee';


function App() {
  return (
    <Router>
          
      <div className="App">
          <Navigation />
          
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/individual' component={Individual} />
            <Route path='/couples' component={Couples} />
            <Route path='/group' component={Group} />
            <Route path='/fees' component={Fee} />
            <Route path='/workshops' component={Workshops} />
            <Route path='/abouttherapy' component={AboutTherapy} />
            
        
          
          
          </Switch>
          <Grid />
      </div>
    </Router> 
  );
}

export default App;
