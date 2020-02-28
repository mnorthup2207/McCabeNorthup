import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './css/normalize.css';
import './css/skeleton.css';
import './css/style.css';
import Nav from './components/Nav';
import About from './pages/About';
import Portfolio from './pages/Portfolio';


function App() {
    return (
        <Router>
            <div id="docBod" className="container">
                <Nav />
                <Switch>
                    <Route exact path={["/", "/home", "/about"]}>
                        <About />
                    </Route>
                    <Route exact path={["/portfolio"]}>
                        <Portfolio />
                    </Route>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
