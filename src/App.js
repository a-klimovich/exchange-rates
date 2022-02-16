import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";


function App() {
  return (
    <div className="App">
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </Header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </div>
  );
}

export default App;
