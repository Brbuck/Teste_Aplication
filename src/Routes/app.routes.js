import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard/index'
import { Profile, Course } from '../pages/Dashboard'

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Dashboard />} />
    <Route path="/perfil" element={<Profile />} />
    <Route path="/cursos" element={<Course />} />
  </Routes>
);

export default AppRoutes;