import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import Home from './pages/Home';

const Routes: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(true);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            <NavBar show={showNavBar} />
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
