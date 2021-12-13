import React, {Component} from "react";
import { BrowserRouter } from 'react-router-dom';
import { RoutesPages } from './Pages/route';
import './App.css';

class App extends Component{

  render () {
    return (
        <BrowserRouter>
            <RoutesPages/>
        </BrowserRouter>     
    );
  }
}
export default App;
