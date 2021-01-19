import React from 'react';
import Home from './Home';
import Gallery from './Gallery'
import Contact from './Contact'
import About_us from './About_us'
import Vegetables from './Vegetables'
import Reservation from './Reservation'
import Nav from './Clinet/components/Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './Clinet/components/Footer'
import NavigationBtn from './Clinet/components/NavigationBtn'
import "bootstrap/dist/css/bootstrap.css";
import '../src/App.css'

function App() {
  
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path ='/' exact component = {Home} />
          <Route path ='/about' component = {About_us} />
          <Route path ='/vegeatbles' component = {Vegetables} />
          <Route path ='/reservation' component = {Reservation} />
          <Route path ='/gallery' component = {Gallery} />
          <Route path ='/contact' component = {Contact} />
        </Switch>
        <Footer />
      <NavigationBtn/ >
      </div>
    </Router>
  );
}
export default App;
