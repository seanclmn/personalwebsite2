
interface ProjectProps {
  projectName: string
  projectUrl: string
  projectImageUrl: string
  description: string
}

const Project = ({projectName, projectUrl, projectImageUrl, description}:ProjectProps) => {
  console.log(projectImageUrl)
  return(
    <a href={projectUrl}
      className="
        max-w-[800px]
        px-[50px]
        py-[20px]
        border-[1px]
        rounded-md
        border-solid
        border-gray-300
        mb-4
        "
      >
      <div 
        className="
          max-w-[800px]
          mx-auto
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
        <img className="w-[100%]" src={projectImageUrl} alt="project-image-url" />
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