import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactsContextProvider from './context/ContactContext';
import AddPage from './pages/AddPage';
import Details from './pages/Details';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <ContactsContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component = {HomePage} />
                    <Route exact path = "/add" component = {AddPage} />
                    <Route exact path = "/edit/:key" component = {EditPage} />
                    <Route exact path = "/details" component = {Details} />
                </Switch>
            </BrowserRouter>
        </ContactsContextProvider>
    );
};

export default Routes;