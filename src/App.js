import Home from "./Components/Home";
import Team from "./Components/Team";
import About from "./Components/About";
import Donate from "./Components/Donate";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <section className=" h-screen font-DMSans mx-auto max-w-screen-2xl">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
