import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PageContainer from './styles/components/PageContainer';

import Home from './pages/Home';
import PHP from './pages/PHP';

const Routes: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(true);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
            <PageContainer navOpen={showNavBar}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/php" component={PHP} />
                </Switch>
            </PageContainer>

            <NavBar show={showNavBar} />
            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
