import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Movies from './components/Movies/Movies.component';
import NotFound from './components/NotFound/NotFound.component';
import Customer from './pages/Customer/Customer.page';
import Rental from './pages/Rental/Rental.page';

const App = () => {
  return ( 
    <div className="container p-5">
      <Switch>
        <Route path='/customers' component={Customer} />
        <Route path='/rentals' component={Rental} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/' component={Movies} />
      </Switch>
    </div>
   );
}

export default App;
