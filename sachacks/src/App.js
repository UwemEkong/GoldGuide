import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';
import Stepper from './layouts/Stepper';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelfOrFamily from './pages/SelfOrFamily';

function App() {
  const resources = <Resources/>
  const selforfamily = <SelfOrFamily/>

  return (
    <div className="App">
      <AppProvider>
        <div className="step-container">
          {/*<Stepper step1={resources}/>*/}
          <Stepper step1={selforfamily}/>
        </div>
      </AppProvider>
    </div>

  );
}

export default App;
