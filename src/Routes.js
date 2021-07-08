import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Signup from './components/common/Smart/Signup';
import Signin from './components/common/Smart/Signin';
import Private from './components/common/Presentational/Private';
import PrivateRoute from './components/common/Smart/PrivateRoute';
import Admin from './components/common/Presentational/Admin';
import AdminRoute from './components/common/Smart/AdminRoute';
import Forgot from './components/common/Smart/Forgot';
import Reset from './components/common/Smart/Reset';
import { AuthProvider } from './context/apiContext';

const Routes = () => {
    return (
        <AuthProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/private" exact component={Private} />
                <AdminRoute path="/admin" exact component={Admin} />
                <Route path ="/auth/password/forgot" exact component={Forgot}/>
                <Route path="/auth/password/reset/:token" exact component={Reset}/>
            </Switch>
        </BrowserRouter>
        </AuthProvider>
    );
};

export default Routes;