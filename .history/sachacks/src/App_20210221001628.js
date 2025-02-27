import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';
import Stepper from './layouts/Stepper';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './layouts/Results';
import Landing from './pages/Landing';
import SelfOrFamily from './pages/SelfOrFamily';
import AboutSelf from './pages/AboutSelf';
import MoreAboutSelf from './pages/MoreAboutSelf';

function App() {
  const resources = <Resources/>
  const selforfamily = <SelfOrFamily/>
  const aboutself = <AboutSelf/>
  const moreaboutself = <MoreAboutSelf/>
  return (
    <div className="App">
      <AppProvider>
        <Router>
        <div className="step-container">
          <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/find-resources">
            <Stepper step1={selforfamily} step2={resources}/>
          </Route>
          <Route exact path="/results">
            <Results/>
          </Route>
          <Route exact path="/about-you">
          <Stepper step1={aboutself}/>
          </Route>
          <Route exact path="/more-about-you">
          <Stepper />
          </Route>
          </Switch>
        </div>
        </Router>
      </AppProvider>
    </div>

  );
}

export default App;
