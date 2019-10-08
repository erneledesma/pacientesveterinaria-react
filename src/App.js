import React, {Component} from 'react';
import './bootstrap.min.css'

import Header from './component/Header'
import NuevaCita from './component/NuevaCita';


class App extends Component  {

  state = {}

  render() {

    return (

      <div className="container">

        <Header 
          titulo="Administrador  de Pacientes Veterinaria"
        />
        <NuevaCita />

      </div>
        
    );
  }
 

}

export default App;
