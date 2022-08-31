import Navbar from '../components/Navbar'
import Project from '../components/Project'

const Home = () =>{
	return(
		<div
			className="
				w-[100vw]
				h-[100vh]
				pt-[20px]
				bg-blue-100
				"
			>
				<Navbar/>
				<h2
					className="
						text-center
						text-3xl"
					>
					Sean Coleman
				</h2>

				<div
					className="
						flex
						flex-col
						items-center
						pt-[50px]
						"
					>
					<Project 
						projectName="projectname" 
						projectUrl=""
						projectImageUrl=""
					/>
				</div>

		
		</div>
		
		)
}

export default Home