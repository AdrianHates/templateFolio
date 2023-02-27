import React, { useEffect, useState } from 'react'
import skills from '../../Datos/skills';
import experiences from '../../Datos/experiences';
import education from '../../Datos/education';

function Tabla1 ( { skills } ) {

  return(
    <div id='skills'>
      <h1>Skills</h1>
        <ul>
          {skills.map((x,i)=><li key={i}>{x.skill}</li>)}
        </ul>
    </div>
  )
}

function Tabla2 ( { experiences } ) {
  return(
    <div id='experiences'>
      <h1>Experience</h1>
      <div>
        {experiences.map((x,i)=><div key={i}>
          <h4>{x.cargo}</h4>
          <h5>{x.proyecto}</h5>
          <h6>{x.descripcion}</h6>
          </div>)}
      </div>
    </div>
  )
}

function Tabla3 ( { education } ) {
  return(
    <div id='education'>
      <h1>Education and Certifications</h1>
      <div>
        {education.map((x,i)=><div key={i}>{x.descripcion}</div>)}
      </div>
    </div>
  )
}

function SobreMiTabla () {
  const [tabla, setTabla] = useState('habilidades')
  useEffect(()=>{
    let a = document.getElementById('sobremi12').querySelectorAll('div')
    a.forEach(x=>x.addEventListener('click',(e)=>{
      let b = e.currentTarget.id;      
      setTabla(b)
    }))
  })
  return(
    <div id='sobremitabla'>
      {tabla==='habilidades'?<Tabla1 skills={skills} />:tabla==='experiencias'?<Tabla2 experiences={experiences} />:<Tabla3 education={education} />}
    </div>
  )
}

export default SobreMiTabla;