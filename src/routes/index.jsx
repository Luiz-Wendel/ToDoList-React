import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <>
    <ToastsContainer
      store={ToastsStore}
      position={ToastsContainerPosition.TOP_CENTER}
    />

    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </>
);

export default Routes;
