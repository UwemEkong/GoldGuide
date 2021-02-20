import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';
import Stepper from './layouts/Stepper';
import { BrowserRouter as Router, Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';

function App() {
  const resources = <Resources/>

  return (
    <div className="App">
      <AppProvider>
        <Router>?
        <div className="step-container">
          <Landing/>
          {/* <Stepper step1={resources}/> */}
        </div>
      </AppProvider>
    </div>

  );
}

export default App;
