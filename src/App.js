import { useContext } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Context from './state/Context'
import ReactLoading from 'react-loading'

function App() {
  const { isLoading } = useContext(Context)

  return isLoading ? (
    <div className='loading'>
      <ReactLoading type="spin" color="#AC49FF" width={45} />
    </div>
  ) : (
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
  )
}

export default App;
