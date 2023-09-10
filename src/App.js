import Head from './components/Head';
import Body from './components/Body';
import './App.css';
import './index.css';
import { Provider } from 'react-redux';
import Store from './components/utils/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
      <Head/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
