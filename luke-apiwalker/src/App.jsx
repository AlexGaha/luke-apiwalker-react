import Form from "./components/Form";
import './Darkly.css'
import { Routes, Route } from "react-router-dom"
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  return (
    <div className="container">
      <Form />
      <Routes>
        <Route path="/people/:id" element={<People /> } />
        <Route path="/planets/:id" element={<Planets /> } />
      </Routes>
    </div>
  );
}

export default App;


