import {useState, Component } from "react";
import { Link } from "react-router-dom";
import foto_estagio from "./foto_estagio.jpg";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Radio } from '@mui/material/Radio';
import { Button } from "@material-ui/core";
import '../App.css';


export class area extends Component {
  render () {
  const ChoseStore = useStoreState(state => state.Chose);
  const setChoseStore = useStoreActions(state => state.setChose);
  const ChoseStore2 = useStoreState(state => state.Chose2);
  const setChoseStore2 = useStoreActions(state => state.setChose2);
  const ChoseStoreOther = useStoreState(state => state.ChoseOther);
  const setChoseStoreOther = useStoreActions(state => state.setChoseOther);

  const [chose, setChose] = useState(ChoseStore);
  const [chose2, setChose2] = useState(ChoseStore2);
  const [choseOther, setChoseOther] = useState(ChoseStoreOther);

  const saveDataBase = () => {
      setChoseStore(chose);
      setChoseStore2(chose2);
      setChoseStoreOther(choseOther);
  }

  return(
    <div align="center" className="area">
     <background-image src={foto_estagio}/> 
        <h2>Vaga para estágio</h2>    
        
        <label name="name">
         <br />
           Você está na faculdade?
         <br />
              
         <Radio value="Não" checked={chose === "Não"} onChange={(event) => setChose(event.target.value)} name="option" /> Não
         <Radio value="Sim" checked={chose === "Sim"} onChange={(event) => setChose(event.target.value)} name="option" /> Sim
         
         <br />

        </label>

        {chose === "Sim" &&  
        <label name="name">
          <br />  
          Qual?
          <br />
           <Radio value="Administracao" checked={chose2 === "Administracao"} onChange={(event) => setChose2(event.target.value)} name="opAdm" /> Administração
           <Radio value="TI" checked={chose2 === "TI"} onChange={(event) => setChose2(event.target.value)} name="opTI" /> Tecnologia
           <Radio value="Outro" checked={chose2 === "Outro"} onChange={(event) => setChose2(event.target.value)} name="opOutro" /> Outro
          <br />
          <br />
        </label>
        }

        {choseOther === "Outro" 
           &&
          <label name="name">
              Qual outro curso?
              <input type = "text" value= "Outro" checked={choseOther === "Outro"} onChange={(event) => setChoseOther(event.target.value)} name="optionOther" />
          </label> 
        }
            <br />
            <br />
            <Link to="/">
              <Button 
                 variant="contained"
              >
                Back
              </Button> 
            </Link>
            <Link to="/cadastro">
              <Button 
                 variant="contained"
                 onClick={saveDataBase}
              >
                 Next
              </Button>
            </Link>    
     </div>
   ); 
  }
}
export default area;