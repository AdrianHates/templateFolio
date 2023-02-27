function Inicio ( { datos } ) {
  return(
    <div id='inicio'>
      <img src={datos.fondo} alt='fondo' />
      <div>
        <h5>Hi, my name is:</h5>
        <h2 class="typewriter" style={{color:'#fda085'}}>{datos.name}</h2>
        <h1>{datos.profesion}</h1>
        <h4>{datos.ubicacion}</h4>
        <div id='redesSociales'>
          <a href=''><i className="bi bi-facebook" /></a>
          <a href=''><i className="bi bi-linkedin" /></a>
          <a href=''><i className="bi bi-github" /></a>
        </div>
        <button className='botonStyle1'>Download CV</button>
      </div>
    </div>
  )
}

export default Inicio;