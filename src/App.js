import React, { Suspense, lazy } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Main = lazy(() => import("./components/Main"));
const About = lazy(() => import("./components/About"));
const PersonInfo = lazy(() => import("./components/PersonInfo"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path="/">
                                <Main />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/person-info/:id">
                                <PersonInfo />
                            </Route>
                        </Switch>
                        <Footer />
                    </Suspense>
                </ScrollToTop>
            </Router>
        </div>
    );
}

export default App;
