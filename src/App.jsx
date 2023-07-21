import "./App.css";

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import ShopPage from "./pages/Shop/ShopPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import CelularModelosPage from "./pages/CelularModelos/CelularModelosPage";

// CONTEXT
import { CelularesProvider } from "./context/CelularesContext";

// COMPONENTS
import Header from "./components/Header/Header";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

const App = () => {
  return (
    <Router>
      <CelularesProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/celular-detail/:id" element={<ItemDetailPage />} />            
            <Route path="/modelo/:modelo" element={<CelularModelosPage />} />
          </Routes>
        </div>
      </CelularesProvider>
    </Router>
  );
};

export default App;
