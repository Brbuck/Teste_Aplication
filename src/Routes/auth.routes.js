import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/SignIn'
import Index from '../pages/Index'
import {HamburguerPage, BeerPage, BarbercuePage} from '../pages/pagesTestes'
import Former from '../pages/Former';

const AuthRoutes = () => (
    <Routes>
      <Route path="/"  element={<Index/>} />
      <Route path="/mestre-cervejeiro"  element={<BeerPage/>} />
      <Route path="/churrasco"  element={<BarbercuePage/>} />
      <Route path="/login"  element={<SignIn/>} />
      <Route path="/hamburguer"  element={<HamburguerPage/>} />
      <Route path="/cadastrar"  element={<Former/>} />
    </Routes>
  );
  
  export default AuthRoutes;