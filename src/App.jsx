import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Introduction from './pages/Introduction'
import GraphicsPrimitives from './pages/GraphicsPrimitives'
import Transformations from './pages/Transformations'
import Projection from './pages/Projection'
import AdvancedTopics from './pages/AdvancedTopics'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/GraphicsPrimitives" element={<GraphicsPrimitives />} />
          <Route path="/Transformations" element={<Transformations />} />
          <Route path="/Projection" element={<Projection />} />
          <Route path="/AdvancedTopics" element={<AdvancedTopics />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
