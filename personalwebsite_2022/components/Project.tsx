
interface ProjectProps {
  projectName: string
  projectUrl: string
  projectImageUrl: string
}

const Project = ({projectName, projectUrl, projectImageUrl}:ProjectProps) => {
  return(
    <a href={projectUrl}
      className="max-w-[400px]"
      >
      <div 
        className="
          max-w-[400px]
          mx-auto
        "
        >
        <h1 className="text-center w-[100%]">{projectName}</h1>
        <img className="w-[100%]" src={projectImageUrl} alt="project-image-url" />
      </div>
    </a>
    )
}

export default Project