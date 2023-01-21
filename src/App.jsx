import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import HomePage from './Pages/HomePage';



function App() {

 

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          

        </Route>
      </Routes>
    </div>
  );
}

export default App;
