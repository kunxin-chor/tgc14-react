import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {/* Home route */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* About Us route */}
        <Route exact path="/about">
          <About />
        </Route>

        {/* Contact Us route */}
        <Route exact path="/contact">
          <ContactUs />
        </Route>

        <Route exact path="/form-submitted">
          <h1>Thank you for your submission</h1>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
