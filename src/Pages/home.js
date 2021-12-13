import { useState , Component } from "react";
import { Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import foto_estagio from "./foto_estagio.jpg"
import "../App.css";

export class Home extends Component {
    render () {
    const nameStore = useStoreState(state => state.Name);
    const liveStore = useStoreState(state => state.Live);
    const setNameStore = useStoreActions(state => state.setName);
    const setLiveStore = useStoreActions(state => state.setLive);
    
    const [name, setFirstName]= useState(nameStore);
    const [live, setLive] = useState(liveStore);
    
    const saveDataBase=()=> {
          setNameStore(name);
          setLiveStore(live);
    }
  return(
    <div className="form" align="center"> 
        <br />
        <h2 align="center">Banco de Dados para estágio</h2>
        <br />
        <form>
            <background-image src={foto_estagio}/>
            <label name="name" className="home">
                Seu nome?
              <br />  
              <input
               type ="text" name="name"
               value={name}
               onChange={(event) => setFirstName(event.target.value)} 
              />
            </label>
            
            <br />
            <br />

            <label name="name" className="home">
                Onde você mora?
              <br />  
              <input
               type ="text" name="name"
               value={live}
               onChange={(event) => setLive(event.target.value)} 
              />
            </label>
            
            <br />
            <br />

            <Link to="/vagas">
                <Button 
                  variant="contained"
                  onClick={saveDataBase}
                  className="btnNext"
                >
                    Next
                </Button>
            </Link>
        </form>
    </div>
    );
  }
};
  export default Home;
