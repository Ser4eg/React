import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homeworks from './homeworks/Homeworks';
import Homework2 from './homeworks/Homework2/Homework2';
import Homework3 from './homeworks/Homework3/Homework3';
import Homework4 from './homeworks/Homework4/Homework4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeworks />} />
        <Route path="/homework2" element={<Homework2 />} />
        <Route path="/homework3" element={<Homework3 />} />
        <Route path="/homework4" element={<Homework4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
