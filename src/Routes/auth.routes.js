import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'

const AuthRoutes = () => (
    <Routes>
      <Route path="/login"  element={<SignIn/>} />
    </Routes>
  );
  
  export default AuthRoutes;