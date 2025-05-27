import React from 'react'
import './../Styles/Inicio.css'
import { Link } from 'react-router-dom'
import WPT from "../icon/icono-WT.png"
import CR from "../icon/icono-correo.png"
import TF from "../icon/icono-telefono.png"
import "../Styles/Aside.css"
import Foto from "../Trabajos/IMG-20250523-WA0009.jpg"

const Aside = () => {
const Contactos =[
    {name:WPT,Tcontacto:"https://wa.me/+573226683797",valor:"Whatsapp"},
    {name:CR,Tcontacto:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=elkindario525@gmail.com",valor:"Correo electronico"},
    {name:TF,Tcontacto:"+57 3226683797",valor:"+57 3226683797"}
  ]
  const ContatosCard = ({name,Tcontacto,valor})=>(
    <div>
       <img className='img-contacto' src={name} alt="" />
       <Link className='contacto'to={Tcontacto} target='_black' >{valor}</Link> 
    </div>
  )
  return (
    <aside className='conternedor-contacto' >
      <img className='conternedor-contacto-img' src={Foto} alt="wt" />
      <p className='titulo-contacto'>Contacto</p>
      <div className='contactos-card'>
      {Contactos.map((Contacto)=>(
        <ContatosCard
        key={Contacto.img}
        name={Contacto.name} 
        Tcontacto={Contacto.Tcontacto}
        valor={Contacto.valor}
        />
      ))}
      </div>
      </aside>
  )
}

export default Aside
