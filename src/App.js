import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import PersonInfo from './components/PersonInfo';
import Footer from './components/Footer';

function App() {

    return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path="/">
                                <Main/>
                            </Route>
                            <Route exact path="/about">
                                <About/>
                            </Route>
                            <Route exact path="/person-info/:id">
                                <PersonInfo/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </Suspense>
                </ScrollToTop>
            </Router>
        </div>
    );
}

export default App;
