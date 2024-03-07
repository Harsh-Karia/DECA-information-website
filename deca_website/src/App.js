//import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Apply from './Pages/Apply';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Container>

        <Navbar/>
        <Routes>
          <Route path='/about' element= {<About/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/apply' element= {<Apply/>}/>
        </Routes>
        asdfasdfafds
        <Footer/>
      </Container>
    </div>

    );
}

export default App;
