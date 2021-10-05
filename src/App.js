
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import NavMenu from './Components/NavMenu/NavMenu';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses';
import Blogs from './Components/Blogs/Blogs';


function App() {

  return (
    <div className="App">
      <Router>
        <NavMenu></NavMenu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
