import Display from "./Display";
import PanelDeBotones from "../Componentes/PaneldeBotones";
import { Component } from "react";
import operaciones from "../Calculos/operaciones";
import "./App.css"



class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null,
  }
    
  handleClick = nombredeBoton => this.setState(operaciones(this.state, nombredeBoton))
  
  render() {
     return (
      <div className="comoponent-app">
        <Display value={this.state.siguiente || this.state.total || "0"}/>
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );
  }
}

export default App;
