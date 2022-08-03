
import './App.css';
import {Router, Route, Routes} from 'react-router-dom';

import ListNotes from './components/ListNotes.jsx'
import ListArchived from './components/ListArchived.jsx'
function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/"  element={<ListNotes />} />
          <Route exact path= "/archived" element={<ListArchived />} />

        </Routes>
 
    </div>
  );
}

export default App;
