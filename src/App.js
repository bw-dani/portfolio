import { React } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Projects from './screens/Projects/Projects';
import Contact from './screens/Contact/Contact'
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
