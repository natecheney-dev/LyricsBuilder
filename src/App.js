import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DisplayLyricsList from './components/DisplayLyricsList';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/songs" element={<DisplayLyricsList />} />
        </Routes>
      
    </div>
  );
}

export default App;
