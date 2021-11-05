import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;