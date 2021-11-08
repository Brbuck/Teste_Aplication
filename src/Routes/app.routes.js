import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/index'
import Buy from '../pages/buy';

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Dashboard />} />
    <Route path="/buy" element={<Buy />} />
  </Routes>
);

export default AppRoutes;