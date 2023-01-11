import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Register from "./register/Register";
import LogIn from "./login/LogIn";
import About from "./About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register/Register" element={<Register />}/>
        <Route path="/login/LogIn" element={<LogIn />}/>
        <Route path="/About/About" element={<About />}/>
        <Route path="/Home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
