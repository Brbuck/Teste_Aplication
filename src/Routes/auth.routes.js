import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Index from '../pages/Index'
import {HamburguerPage, BeerPage, BarbercuePage} from '../pages/pagesTestes'

const AuthRoutes = () => (
    <Routes>
      <Route path="/"  element={<Index/>} />
      <Route path="/mestre-cervejeiro"  element={<BeerPage/>} />
      <Route path="/churrasco"  element={<BarbercuePage/>} />
      <Route path="/login"  element={<SignIn/>} />
      <Route path="/hamburguer"  element={<HamburguerPage/>} />
      
    </Routes>
  );
  
  export default AuthRoutes;