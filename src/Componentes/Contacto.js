function Contacto ( { contacto } ) {
  return(
    <div id='contacto'>
      <h1>CONTACT ME</h1>
      <div>
        <form className='contactoChild' action="https://formsubmit.co/kurono1807@gmail.com" method="POST" aria-labelledby='datos-contacto'>
        <input id='name' type='text' name='Name' placeholder="Name" required />
        <input id='email' type='email' name='Email' placeholder='Email:' required />
        <input id='subject' type='text' name='Subject' placeholder="Subject" required />
        <textarea id='message' type='text' name='Message' placeholder="Message" required />
        <button className='botonStyle1' type='submit'>Send</button>
        </form>
        <div className='contactoChild'>
          <div>
            <h4>Location</h4>
            <h5>{contacto.location}</h5>
          </div>
          <div>
            <h4>Email</h4>
            <h5>{contacto.email}</h5>
          </div>
          <div>
            <h4>Phone</h4>
            <h5>{contacto.phone}</h5>
          </div>
          <div>
            <h4>Website</h4>
            <h5>{contacto.website}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto;