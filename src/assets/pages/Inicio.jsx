import Aside from '../components/Aside'
import Foto1 from "./../Trabajos/despues-doña.jpg"
import Foto2 from "./../Trabajos/fachada.jpg"
import Foto3 from "./../Trabajos/edificio.jpg"
import Foto4 from "./../Trabajos/muro-enchape.jpg"
import Foto5 from "./../Trabajos/murro-ladrillo.jpg"
import Foto6 from "./../Trabajos/enchape.jpg"
import Foto7 from "./../Trabajos/IMG-20250523-WA0004.jpg"
import Foto8 from "./../Trabajos/IMG-20250523-WA0005.jpg"
import Foto9 from "./../Trabajos/IMG-20250523-WA0006.jpg"
import Foto10 from "./../Trabajos/IMG-20250523-WA0007.jpg"
import Foto11 from "./../Trabajos/IMG-20250523-WA0008.jpg"
import Foto12 from "./../Trabajos/Captura de pantalla 2025-05-27 224102.png"
import video1 from "./../Trabajos/Vídeo sin título Hecho con Clipchamp.mp4"
import video2 from "./../Trabajos/Vídeo sin título2 Hecho con Clipchamp.mp4"
import video3 from "./../Trabajos/Vídeo sin título3 Hecho con Clipchamp.mp4"
import video4 from "./../Trabajos/Vídeo sin título4 Hecho con Clipchamp.mp4"
import video5 from "./../Trabajos/video.mp4"
const Inicio = () => {
  const Experiencias =[
    "Pegado de adobe","Reboque","Enchape",
    "Pisos","Techos","Baños","Armado y baceada de escalas",
    "Demoliciones","Refuerzo de muros","Plomeria","Mortero","Estucado","Molduras en yeso",
    "Drywall"
  ]
  const trabajos_imagen = [

    {foto:Foto1,id:1},
    {foto:Foto2,id:2},
    {foto:Foto3,id:3},
    {foto:Foto4,id:4},
    {foto:Foto5,id:5},
    {foto:Foto6,id:6},
    {foto:Foto7,id:7},
    {foto:Foto8,id:8},
    {foto:Foto9,id:9},
    {foto:Foto10,id:10},
    {foto:Foto11,id:11},
    {foto:Foto12,id:12}
  ]

  const Videos = [
    {video:video1,id:1},
    {video:video2,id:2},
    {video:video3,id:3},
    {video:video4,id:4},
    {video:video5,id:5}
]
  return (
    <>
      <section className='fondo'>
      
      <section className='contenedor-descripcion'>
      <h1 className='introduccion' >Hola, soy Elkin Dario Castrillón,<br/>con más de 30 años de experiencia en la construcción y remodelación de edificaciones</h1>
      <p className='descripcion' >A lo largo de mi trayectoria, he trabajado en proyectos residenciales, comerciales e industriales, especializándome en estructuras de mampostería, acabados y restauraciones. Mi enfoque está en la precisión, el uso eficiente de materiales y el cumplimiento de los más altos estándares de seguridad y calidad. Me apasiona el oficio y siempre busco soluciones prácticas y duraderas para cada proyecto, garantizando satisfacción y confianza a mis clientes y empleadores además de un excelente uso del orden y el cuidado de mi area de trabajo, caracterizandome por la pulcritud y eficiencia.</p>
      <ul className='lista-experiencias'>
      {Experiencias.map((Experiencia,index)=>(
        <li className='lista-experiencia'  key={index}>{Experiencia}</li>
      ))}
      </ul>
      </section  >
      <section className='contenedor-trabajos' >
        <h2>Estos son algunos de mis trabajos</h2>
        <section className='contenedor-trabajos-imagen'>
        {trabajos_imagen.map((foto)=>(
          <img className='trabajo-foto' key={foto.id} src={foto.foto} alt="foto del trabajo realizado" />
        ))}
        </section>
        </section>
        <section className='contenedor-trabajos'>
          <h2>Con estos videos podrás apreciar mejor el trabajo</h2>
          <section className="contenedor-trabajos-imagen">
          {Videos.map((video)=>(
            <video className='trabajo-foto' key={video.id} src={video.video} loop controls ></video>
          ))}
          </section>
      </section> 
      <section className='aside'><Aside></Aside></section>
      </section>
    
    </>
  )
}

export default Inicio