import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Movies from './pages/Movies/Movies.component'
import NavBar from './components/NavBar/NavBar.component'
import NotFound from './components/NotFound/NotFound.component'
import Customer from './pages/Customer/Customer.page'
import Rental from './pages/Rental/Rental.page'
import MovieForm from './components/MovieForm/MovieForm.component'
import LoginForm from './components/LoginForm/LoginForm.component'
import RegisterForm from './components/RegisterForm/RegisterForm.component'
import './App.css'

const App = () => {
  return ( 
    <React.Fragment >
      <NavBar />
      <main className="container pt-5">
        <Switch>
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/movies/:id' component={MovieForm} />
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
