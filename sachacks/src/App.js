import './App.css';
import Resources from './pages/Resources';
import { AppProvider } from '@shopify/polaris';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="container">
          <Resources/>
        </div>
      </AppProvider>
    </div>

  );
}

export default App;
