import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import PageContainer from './styles/components/PageContainer';

import Home from './pages/Home';

import Browser from './pages/Browser';
import VsCode from './pages/VsCode';

import PHP from './pages/PHP';
import PHPConfig from './pages/PHP/Config';
import PHPStart from './pages/PHP/Start';
import XAMPP from './pages/PHP/Config/XAMPP';

const Routes: React.FC = () => {
    const [showNavBar, setShowNavBar] = useState(true);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header setShowNavBar={setShowNavBar} showNavBar={showNavBar} />
            <PageContainer>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/config/browser" component={Browser} />
                    <Route exact path="/config/vscode" component={VsCode} />

                    <Route exact path="/php" component={PHP} />
                    <Route exact path="/php/config" component={PHPConfig} />
                    <Route exact path="/php/config/xampp" component={XAMPP} />
                    <Route exact path="/php/start" component={PHPStart} />
                </Switch>
                <NavBar show={showNavBar} />
            </PageContainer>

            <Footer />
        </BrowserRouter>
    );
}

export default Routes;
