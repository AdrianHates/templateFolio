import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Componentes/Navbar'
import Inicio from './Componentes/Inicio'
import Portafolio from './Componentes/Portafolio';
import Contacto from './Componentes/Contacto';
import SobreMi from './Componentes/SobreMi';
/*Datos*/

import datos from './Datos/datos';
import contacto from './Datos/contacto';
import sobreMi from './Datos/sobreMi';

function App() {

  const[seccion, setSeccion]=useState(<Inicio datos={datos} />)
  const log = 'https://ceroideas.es/wp-content/uploads/2022/04/que-hace-un-programador-de-apps.jpg'

  function Cambio(e) {
    
    let opcion = e.currentTarget.id
    switch(opcion) {
      case '0':
        setSeccion(<Inicio datos={datos} />)
        break;
      case '1':
        setSeccion(<SobreMi sobreMi={sobreMi} />)
        break;
      case '2':
        setSeccion(<Portafolio />)
        break;
      case '3':
        setSeccion(<Contacto contacto={contacto} />)
        break;
    }
  }

  useEffect(()=>{
    document.querySelectorAll(".opciones").forEach(x=>x.addEventListener('click', Cambio))
  }, [])

  function butNav() {
    let a = document.getElementById('navbarCopy')
    if(a.style.display==='flex'){
    a.style.display='none'
    } else {
    a.style.display='flex'
    a.style.position='absolute'
    a.style.top='0px'
    a.style.left='0px'
    }
  }

  return (
    <div className="App">
      <button id='buttonNav' onClick={butNav}>☰</button>
      <Navbar name={datos.name} cambio={Cambio} id='navbar' log={log} />
      <Navbar name={datos.name} cambio={Cambio} id='navbarCopy' log={log} />
      {seccion}
    </div>
  );
}

export default App;
