import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Introduction from './pages/Introduction';
import GraphicsPrimitives from './pages/GraphicsPrimitives';
import Transformations from './pages/Transformations';
import Projection from './pages/Projection';
import AdvancedTopics from './pages/AdvancedTopics';
import Clipping from "./pages/Clipping";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/GraphicsPrimitives" element={<GraphicsPrimitives />} />
          <Route path="/Transformations" element={<Transformations />} />
          <Route path="/Projection" element={<Projection />} />
          <Route path="/Clipping" element={<Clipping />} />
          <Route path="/AdvancedTopics" element={<AdvancedTopics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;