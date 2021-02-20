import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';
import Stepper from './layouts/Stepper'

function App() {
  const resources = <Resources/>

  return (
    <div className="App">
      <AppProvider>
        <div className="step-container">
          <Stepper step1={resources}/>
        </div>
      </AppProvider>
    </div>

  );
}

export default App;
