// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import { AppFooter } from "./components/footer.js";
import Home from './pages/Home';
import AppHeader from './components/navbar.js';
import Landing from './pages/Landing';
import Bills from './pages/Bills';
import PayBills from './pages/PayBills';
import Login from "./pages/Login";

const App=() =>{
  return (
    <Router>
    {/* <ScrollToTop /> */}

    <div className="App">
     <AppHeader></AppHeader>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/landing" exact component={Landing}></Route>
      <Route path="/bills" exact component={Bills}></Route>
      <Route path="/bills/:id" exact component={PayBills}></Route>
      <Route path="/login" exact component={Login}></Route>
      </Switch>
      <AppFooter></AppFooter>
    </div>
  </Router>
  );
}

export default App;
