import React, { useState, useEffect } from 'react';
import proyectos from "../Datos/proyectos";
function Portafolio  () {
  const [proyectosElegidos, setProyectosElegidos] = useState(proyectos)

  useEffect(()=>{
    let a = document.querySelectorAll('.botonStyle1')
    a.forEach(x=>x.addEventListener('click', (e)=>{
      if(x.id==='all') {
        setProyectosElegidos(proyectos)
      };
      if(x.id==='web') {
        setProyectosElegidos(proyectos.filter(y=>y.categoria==='web'))
      };
      if(x.id==='desk') {
        setProyectosElegidos(proyectos.filter(y=>y.categoria==='desk'))
      }
    }))
  })
  return(
    <div id='portafolio'>
      <div id='portafolio1'>
        <h1>MY PORTFOLIO</h1>
      </div>
      <div id='portafolio2'>
        <button id='all' className='botonStyle1'>All</button>
        <button id='web' className='botonStyle1'>Web</button>
        <button id='desk' className='botonStyle1'>Desk</button>
      </div>
      <div id='cuadricula'>
        {proyectosElegidos.map((x,i)=><div key={i} data-texto={x.titulo} data-descripcion={x.descripcion} className='cuadro'><img src={x.img} alt={`proyecto${i}`} /></div>)}
      </div>
    </div>
  )
}

export default Portafolio;