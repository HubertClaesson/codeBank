import './App.css'
import Navbar from './components/Navbar';
import FooterComponent from './components/footer/FooterComponent';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardPage from './pages/CardPages';
import HeroSectionPage from './pages/HeroSectionPage';
import NotFoundPages from './pages/NotFoundPages';



function App() {

  return (
    <>
      <div className='footer-pusher'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cards' element={<CardPage />} />
          <Route path='hero' element={<HeroSectionPage />} />
          <Route path='*' element={<NotFoundPages />} />
        </Routes>

        < FooterComponent />
      </div>

    </>
  )
}

export default App;
