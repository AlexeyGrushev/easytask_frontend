import { RouterProvider } from 'react-router-dom';

import logo from "./logo.svg";
import "./App.css";

import router from './routing';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
