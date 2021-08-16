// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import { AppFooter } from "./components/Footer";
import Home from './pages/Home';
import AppHeader from './components/Navbar';
const App=() =>{
  return (
    <Router>
    {/* <ScrollToTop /> */}

    <div className="App">
     <AppHeader></AppHeader>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      </Switch>
      <AppFooter></AppFooter>
    </div>
  </Router>
  );
}

export default App;
