import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';
import Stepper from './layouts/Stepper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';

function App() {
  const resources = <Resources/>

  return (
    <div className="App">
      <AppProvider>
        <Router>
        <div className="step-container">
          <Switch>

          <Route path="/">
            <Landing/>
          </Route>
          <Route path="/find-resources">
            <Stepper step1={resources}/>
          </Route>

          </Switch>


        </div>
        </Router>
      </AppProvider>
    </div>

  );
}

export default App;
