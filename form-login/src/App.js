import './App.css';
import Login  from './pages/login'

import { Route, Routes,  BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
