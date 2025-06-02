import './../Styles/Inicio.css'
import { Link } from 'react-router-dom'
import "../Styles/Aside.css"
import Foto from "../Trabajos/IMG-20250523-WA0009.jpg"

const Aside = () => {

  return (
    <>
      <div className='conternedor-contacto' >
        <img className='contenedor-contacto-img' src={Foto} alt="wt" />
        <p className='titulo-contacto'>Contacto</p>
        <div className='contactos-card'>
          <Link className='contacto' to='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elkindario525@gmail.com' target='_black' >Gmail
          </Link>
          <Link className='contacto' to='+57 3226683797' target='_black' >3226683797
          </Link>
          <Link className='contacto' to="https://wa.me/+573226683797" target='_black' >Whatsapp
          </Link>
        </div>
      </div>
    </>
  )
}

export default Aside
