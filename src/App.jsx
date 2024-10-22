import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/1_Introduction/Introduction';
import GraphicsPrimitives from './components/2_Graphics_Primitives/GraphicsPrimitives';
import Transformations from './components/3_2D_and_3D_Transformations/2Dand3DTransformations';
import ProjectionDemo from './components/4_3D_Projection/3DProjection';
import Clipping from './components/5_Clipping/Clipping';
import AdvancedTopics from './components/6_Advanced_Topics/AdvancedTopics';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Introduction</a></li>
            <li><a href="/primitives">Graphics Primitives</a></li>
            <li><a href="/transformations">Transformations</a></li>
            <li><a href="/projection">Projection</a></li>
            <li><a href="/clipping">Clipping</a></li>
            <li><a href="/advanced">Advanced Topics</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/primitives" element={<GraphicsPrimitives />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/projection" element={<ProjectionDemo />} />
          <Route path="/clipping" element={<Clipping />} />
          <Route path="/advanced" element={<AdvancedTopics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;