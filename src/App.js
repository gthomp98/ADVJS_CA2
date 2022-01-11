//This is the app page, which acts like the main hub of the app. All of our pages and components are drawn in here so they can all be accessed. Our routes are also set up here, showing which
//pages can be accesed with and without the token meaning that anything within protected miniatures cannot be accessed

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'



//Components
import Navbar from "./components/Navbar";

//Pages
import Miniatures from "./pages/miniatures/Miniatures"; 
import MiniaturesCreate from './pages/miniatures/Create';
import MiniaturesDelete from './pages/miniatures/Delete'
import MiniaturesEdit from './pages/miniatures/Edit';
import MiniaturesShow from './pages/miniatures/Show';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  let protectedMiniatures;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
    }
  }, []);
//This function also setts the token to local storage so it can be accessed by the whole app, and removes it if not
  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth);
    if (auth) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  if (authenticated) {
    protectedMiniatures = (
      <>
        <Route path="/miniatures/create" element={<MiniaturesCreate />} />
        <Route path="/miniatures/:id/edit" element={<MiniaturesEdit />} />
        <Route exact path="/miniatures/:id" element={<MiniaturesShow />} />
        <Route exact path="/miniatures/:id/delete" element={<MiniaturesDelete />} />
      </>
    )
  }

  return (
    <Router>
      <Navbar onAuthenticated={onAuthenticated} authenticated={authenticated} />
   
      <Routes>
      <Route path="/login" element={<Login onAuthenticated={onAuthenticated} authenticated={authenticated} />} />
      <Route exact path="/miniatures" element={<Miniatures />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/register" element={<Register />} />
      {protectedMiniatures}
      </Routes>
    </Router>
  );
};

export default App;
