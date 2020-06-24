import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
