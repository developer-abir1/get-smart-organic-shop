import Home from "./component/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext } from "react";
import ProductDetails from "./component/Home/ProductDetails/ProductDetails";

function App() {
  const UserContext = createContext()
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route path="/product/:id" component={ProductDetails}></Route>

      </Switch>
    </Router>
  );
}

export default App;
