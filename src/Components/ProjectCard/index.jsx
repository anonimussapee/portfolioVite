import './card.css'

const ProjectCard = (props) =>{
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center'>
      <iframe src={props.link} className='iframe-size w-[100%] min-w-[320px] max-w-[500px] h-[400px]'></iframe>
    </div>
  )
}
export {ProjectCard}