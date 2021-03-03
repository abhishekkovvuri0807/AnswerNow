import './App.css';
import Navigation from './Navigation'
import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Dinos from './Dinos'
import NewHome from './NewHome'
import Login from './Login';
import AppTopBar from './AppTopBar';
import Footer from './Footer';







function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppTopBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/dinos" component={Dinos} />
          <Route path="/newhome" component={NewHome} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
