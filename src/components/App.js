import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Todo from "../pages/todo";
import About from "../pages/about";
import NotFound from "../pages/notFound";
import Header from "./Header";
import Detail from "../pages/detail";

const App = () => {
  return (
    <Router>
      <div className="header" style={{ marginBottom: "50px" }}>
        <Header />
      </div>
      <div className="content" style={{ padding: "0px 40px 0px 40px" }}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/todo" />
          </Route>
          <Route path="/todo" component={Todo} exact />
          <Route path="/about" component={About} exact />
          <Route path="/todo/:id" component={Detail} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
