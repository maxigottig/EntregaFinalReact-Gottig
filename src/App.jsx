import './App.css'
import Navbar from "./components/NavBar/NavBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ItemListContainerPage from './components/pages/ItemListContainerPage'
import AboutPage from './components/pages/AboutPage'
import ItemDetailContainerPage from './components/pages/ItemDetailContainerPage'
import Header from "./components/Header/Header"


function App() {


  return (
    <>
    <Router>
    <Header />
    <Navbar></Navbar>
    
    <Routes>
    <Route path = "/" element={<ItemListContainerPage/>} />
    <Route path = "/category/:category" element={<ItemListContainerPage />} />
    <Route path = "/about" element={<AboutPage />} />
    <Route path = "/item/:id" element={<ItemDetailContainerPage/>} />
    </Routes>

    </Router>    
    </>
  );
};

export default App