import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Index from '../pages/Index'

const AuthRoutes = () => (
    <Routes>
      <Route path="/login"  element={<SignIn/>} />
      <Route path="/"  element={<Index/>} />
    </Routes>
  );
  
  export default AuthRoutes;