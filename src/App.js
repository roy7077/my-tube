import Head from './components/Head';
import Body from './components/Body';
import './App.css';
import './index.css';
import { Provider } from 'react-redux';
import Store from './components/utils/Store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Maincontainer from './components/Maincontainer';
import Watchlist from './components/Watchlist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
        // loader: teamLoader,
      },
      {
        path: "watch",
        element: <Watchlist />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
      <Head/>
      <RouterProvider router={router} />
    </div>
    </Provider>
  );
}

export default App;
