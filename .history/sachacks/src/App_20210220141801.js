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
          <Route path="">
            <Landing/>
          </Route>
          <Route>
            <Stepper step1={resources}/>
          </Route>

        </div>
        </Router>
      </AppProvider>
    </div>

  );
}

export default App;
