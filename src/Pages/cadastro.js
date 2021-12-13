import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import foto_estagio from "./foto_estagio.jpg";
import { Radio } from "@material-ui/core/Radio";
import { Button } from "@material-ui/core";
import '../App.css';


export class Cadastro extends Component {
   render ()  {
    const Cadastros= useStoreState(state => state.Cadastro);
    const setCadastros = useStoreActions(state => state.setCadastro);
    const Experiencias = useStoreState(state => state.Experiencia);
    const setExperiencias = useStoreActions(state => state.setExperiencia);

    const [cadastro, setCadastro] = useState(Cadastros);
    const [experiencia, setexperiencia] = useState(Experiencias);
    
    const saveDataBase = () => {
          setCadastros(cadastro);
          setExperiencias(experiencia);
    }

    return(
      
        <div align="center" className="cadastro">
        <background-image src={foto_estagio}></background-image>
            <h2>Já possui algum cadastro ?</h2>    
            
            <label name="name">
             <br />    
             <Radio value="Não" checked={Cadastro === "Não"} onChange={(event) => setCadastro(event.target.value)} name="option" /> Não
             <Radio value="Sim" checked={Cadastro === "Sim"} onChange={(event) => setCadastro(event.target.value)} name="option" /> Sim
             <br />
            </label>
    
            {adopt === "Sim" &&
            <label name="name">
              <br />  
              Qual seu nível de experiência?
              <br />
               <Radio value="Nenhum" checked={Experiencias === "Nenhum"} onChange={(event) => setexperiencia(event.target.value)} name="opNem" /> Nenhuma
               <Radio value="Meses" checked={Experiencias === "Meses"} onChange={(event) => setexperiencia(event.target.value)} name="opMeses" /> Alguns meses (0-6)
               <Radio value="Anos" checked={Experiencias === "Anos"} onChange={(event) => setexperiencia(event.target.value)} name="opAnos" /> Anos (1-2 ..)
              <br />
              <br />
            </label>
            }

                <br />
                <br />
                <Link to="/area">
                  <Button 
                     variant="contained"
                  >
                    Back
                  </Button> 
                </Link>
                <Link to="/final">
                  <Button 
                     variant="contained"
                     onClick={saveDataBase}
                  >
                     Finzalizar
                  </Button>
                </Link>       
        </div>
    );
  }      
}
export default Cadastro;