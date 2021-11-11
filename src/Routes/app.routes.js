import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/index'
import { Profile } from '../pages/pagesTestes'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Dashboard />} />
    <Route path="/perfil" element={<Profile />} />
  </Routes>
);

export default AppRoutes;