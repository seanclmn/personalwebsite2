import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'


interface ProjectProps {
  projectName: string
  projectUrl: string
  projectImageUrl: string
  description: string
  nextProjectUrl: string
}

const Project = ({projectName, projectUrl, projectImageUrl, description,nextProjectUrl}:ProjectProps) => {
  return(
    <div
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
        <Link href={projectUrl}>
          <img className="w-[100%] max-w-[800px]" src={projectImageUrl} alt="project-image-url" />
        </Link>
        <p 
          className="
            text-lg
            mt-[20px]
            text-white
            "
        >{description}</p>
        {nextProjectUrl.length>0 && <Link href={nextProjectUrl}><Button mt={20}>Next project</Button></Link>}
      </div>
    </div>
    )
}

export default Project