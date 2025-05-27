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

    {foto:Foto1},
    {foto:Foto2},
    {foto:Foto3},
    {foto:Foto4},
    {foto:Foto5},
    {foto:Foto6},
    {foto:Foto7},
    {foto:Foto8},
    {foto:Foto9},
    {foto:Foto10},
    {foto:Foto11}
  ]

  const Videos = [
    {video:video1},
    {video:video2},
    {video:video3},
    {video:video4},
    {video:video5}
]
  return (
    <>
      <Aside></Aside>
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
          <img className='trabajo-foto' src={foto.foto} alt="foto del trabajo realizado" />
        ))}
        </section>
        </section>
        <section className='contenedor-trabajos'>
          <h2>Con estos videos podrás apreciar mejor el trabajo</h2>
          <section className="contenedor-trabajos-imagen">
          {Videos.map((video)=>(
            <video className='trabajo-foto' src={video.video} loop controls ></video>
          ))}
          </section>
      </section>

      
    
    </>
  )
}

export default Inicio