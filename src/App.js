import React, {Component} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import Movies from './pages/Movies/Movies.page'
import Customer from './pages/Customer/Customer.page'
import Rental from './pages/Rental/Rental.page'
import Login from './pages/Login/Login.page'
import Register from './pages/Register/Register.page'
import NavBar from './components/NavBar/NavBar.component'
import NotFound from './components/NotFound/NotFound.component'
import MovieForm from './components/MovieForm/MovieForm.component'
import Logout from './components/Logout/Logout.component'
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.component'

class App extends Component {
  state = { }

  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({user})
  }

  render() { 
    const {user} = this.state
    return ( 
      <React.Fragment >
        <ToastContainer/>
        <NavBar user={user} />
        <main className="container pt-5">
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/register' component={Register} />
            <ProtectedRoute 
              path='/movies/:id'
              component={MovieForm}
            />
            <Route path='/movies' render={ props => <Movies user={user} {...props} />} />
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
}
 
export default App;
