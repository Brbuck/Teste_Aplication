import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/sign'

const AuthRoutes = () => (
    <Routes>
      <Route path="/"  element={<SignIn/>} />
    </Routes>
  );
  
  export default AuthRoutes;