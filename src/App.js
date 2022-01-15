import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Calculator} from "./Components/Calculator";
import {Sidebar} from "./Components/Sidebar";
import {Trig} from "./Components/Trig";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Calculator />} />
          <Route path="/trig" exact element={<Trig />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;