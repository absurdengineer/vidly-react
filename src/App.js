import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Movies from './components/Movies/Movies.component'
import NavBar from './components/NavBar/NavBar.component'
import NotFound from './components/NotFound/NotFound.component'
import Customer from './pages/Customer/Customer.page'
import Rental from './pages/Rental/Rental.page'
import './App.css'

const App = () => {
  return ( 
    <React.Fragment >
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customer} />
          <Route path='/rentals' component={Rental} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
   );
}

export default App;
