function Navbar( { log, name, id }) {

  return(
    <div id={id}>
      <div className='navbar1'>
        <div>
          <img src={log} alt='foto' />
        </div>
        <h1 className='nameRed'>
        {name}
        </h1>
      </div>
      <div className='navbar2'>
        <ul>
          <li id='0' className="opciones">Home</li>
          <li id='1' className="opciones">About Me</li>
          <li id='2' className="opciones">Portfolio</li>
          <li id='3' className="opciones">Contact Me</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;