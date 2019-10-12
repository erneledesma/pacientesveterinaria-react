import React, {Component} from 'react';
import './bootstrap.min.css'

import Header from './component/Header'
import NuevaCita from './component/NuevaCita';
import ListaCitas from './component/ListaCitas';


class App extends Component  {


  state = {
    citas : []
  }

  crearNuevaCita = datos => {
    //console.log(datos);
    //copiar el state actual
    const citas = [...this.state.citas, datos]

    // agregar el nuevo state
    this.setState({
      citas
    })
    
  }

  render() {

    return (

      <div className="container">

        <Header 
          titulo="Administrador  de Pacientes Veterinaria"
        />
        <NuevaCita
        crearNuevaCita={this.crearNuevaCita}
        />

        <ListaCitas
          citas = {this.state.citas}
         />

      </div>
        
    );
  }
 

}

export default App;
