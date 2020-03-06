import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import PersonInfo from './components/PersonInfo';

function App() {

    return (
    <div className="App">
        <Router>
            {/*temp nav*/}
            <ul>
                <li>
                    <Link to="main">Main</Link>
                </li>
                <li>
                    <Link to="/about">Hello Nikitka</Link>
                </li>
            </ul>

            <Switch>
                <Route  path='/main' component={Main}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/person-info/:id' component={PersonInfo}/>
                <Redirect exact path='/' to='/main'/>
            </Switch>

            {/*footer as react component*/}
            {/*<Footer />*/}
        </Router>
    </div>
  );
}

export default App;
