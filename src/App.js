import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import Movies from './pages/Movies/Movies.component'
import NavBar from './components/NavBar/NavBar.component'
import NotFound from './components/NotFound/NotFound.component'
import Customer from './pages/Customer/Customer.page'
import Rental from './pages/Rental/Rental.page'
import MovieForm from './components/MovieForm/MovieForm.component'
import Login from './pages/Login/Login.component'
import Register from './pages/Register/Register.component'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
  return ( 
    <React.Fragment >
      <ToastContainer/>
      <NavBar />
      <main className="container pt-5">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
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
