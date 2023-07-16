import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from './context/notes/NoteState';
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
      <Navbar />
      <Alert message="This will show the alert when deleting/editing a note." />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
      </Routes>
      </div>
      </NoteState>
    </>
  );
}

export default App;
