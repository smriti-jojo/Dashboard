import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard.tsx';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
