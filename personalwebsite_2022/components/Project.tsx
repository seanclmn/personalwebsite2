
interface ProjectProps {
  projectName: string
  projectUrl: string
  projectImageUrl: string
  description: string
}

const Project = ({projectName, projectUrl, projectImageUrl, description}:ProjectProps) => {
  return(
    <a href={projectUrl}
      className="
        max-w-[800px]
        px-[50px]
        mb-4
        h-screen
        flex
        flex-col
        justify-start
        "
      >
      <div 
        className="
          max-w-[800px]
          mx-auto
          mt-[100px]
          flex
          flex-col
          items-center
        "
        >
        <h1 
          className="
            text-center 
            w-[100%] 
            text-2xl
            mb-[10px]
            "
          >
          {projectName}
        </h1>
        <img className="w-[100%] max-w-[500px]" src={projectImageUrl} alt="project-image-url" />
        <p 
          className="
            text-sm
            mt-[20px]
            "
        >{description}</p>
      </div>
    </a>
    )
}

export default Project