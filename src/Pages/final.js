import React,  { Component } from "react";
import { Link } from "react-router-dom";
import foto_estagio from "./foto_estagio.jpg"
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Button } from "@material-ui/core";
import '../App.css';

export class final extends Component {
   render () {
    const NameStore = useStoreState(state => state.Name);
    const setNameStore = useStoreActions(state => state.setName)
    const LiveStore = useStoreState(state => state.Live);
    const setLiveStore = useStoreActions(state => state.setLive)
    const ChoseStore = useStoreState(state => state.Chose);
    const setChoseStore = useStoreActions(state => state.setChose)
    const ChoseStore2 = useStoreState(state => state.Chose2);
    const setChoseStore2 = useStoreActions(state => state.setChose2);
    const ChoseOtherStore = useStoreState(state => state.ChoseOther);
    const setChoseOtherStore = useStoreActions(state => state.setChoseOther);
    const Cadastros = useStoreState(state => state.Cadastro);
    const setCadastros = useStoreActions(state => state.setCadastro);
    const Experiencias = useStoreState(state => state.Experiencia);
    const setExperiencias = useStoreActions(state => state.setExperiencias);
   
    const clearStore = () => {
         setNameStore('');
         setLiveStore('');
         setChoseStore('');
         setChoseStore2('');
         setChoseOtherStore('');
         setCadastros('');
         setExperiencias('');
    }

    return (
        <div align="center" className="final">
            <background-image src={foto_estagio}></background-image>
            <br />
            <h2> Cadastro </h2>
            <br />
           <label>
              <h3>Nome: </h3>
                <br/> 
                  {NameStore} 
                <br />
                <br />
              <h3> Local: </h3>
               <br />
                  {LiveStore} 
               <br />
               <br />
              <h3>area:</h3>
               <br /> 
               {ChoseStore}, {ChoseStore2},{ChoseOtherStore} 
               <br />
               <br />
              <h3>Já estagiou? </h3>
                <br/>
                {Cadastros}
                <br />
                <br />
              <h3>Conte-nos sobre suas experiências</h3>     
                <br />
                {Experiencias}
                <br />
                <br />
           </label>
           <br/>
                <Link to="/cadastro">
                  <Button 
                     variant="contained"
                  >
                    Back
                  </Button> 
                </Link>
                <Link to="/">
                  <Button 
                     variant="contained"
                     onClick={clearStore}
                  >
                     Novo Cadastro
                  </Button>
                </Link>
                <br />
                <Link to="/apiCadastro">
                      <p>
                        Dados   
                      </p>
                </Link>
          
        </div>
    );
  }
}  

export default Result;