import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import DisplayLyricsList from './components/DisplayLyricsList';
import Nav from './components/Nav';
import DisplaySongLyrics from './components/DisplaySongLyrics';
import AddSong from './components/AddSong';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/songs" element={<DisplayLyricsList />} />
          <Route path="/song" element={<DisplaySongLyrics />} />
          <Route path="/addsong" element={<AddSong />} />
        </Routes>
      
    </div>
  );
}

export default App;
