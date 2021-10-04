
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Services from './Components/Services/Services';


function App() {

  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
