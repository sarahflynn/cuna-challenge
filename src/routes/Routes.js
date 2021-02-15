import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import QuoteForm from '../components/quote/QuoteForm';

const Routes = () => (
  <Switch>
    <Route path='/insurance/autohome/quote' component={QuoteForm} />
    <Redirect exact path='/' to='/insurance/autohome/quote' />
  </Switch>
);

export default Routes;
