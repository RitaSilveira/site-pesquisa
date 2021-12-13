import { Routes, Route } from 'react-router-dom';
import React , {Component} from 'react';
import { home } from "./home";
import { area } from "./area";
import { cadastro } from "./cadastro";
import { final } from "./final";
import { apiCadastro } from "./api";


export class RoutesPages extends Component {
  render () {
   return(
      <Routes>
         <Route exact path='/' element={<home/>} />
         <Route exact path='/area' element={<area/>} />
         <Route exact path='/cadastro' element={<cadastro/>} />
         <Route exact path='/final' element={<final/>} />
         <Route exact path='/api' element={<apiCadastro/>} />
      </Routes>

   );
 }
}

export default RoutesPages;
