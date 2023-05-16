import logo from './logo.svg';
import './App.css';
import { RouterProvider, Routes } from 'react-router-dom';
import { route } from './routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
