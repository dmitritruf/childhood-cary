import Home from "./pages/Home";
import Team from "./pages/Team";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
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
