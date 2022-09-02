import Navbar from '../components/Navbar'
import Project from '../components/Project'

const Home = () =>{
	return(
		<div
			className="
				w-[100vw]
				h-[100vh]
				"
			>
				<Navbar/>
				<h2
					className="
						pt-[100px]
						text-center
						text-3xl"
					>
					Sean Coleman
				</h2>

				<div
					className="
						w-[100vw]
						flex
						flex-col
						items-center
						pt-[50px]
						"
					>
					<Project 
						projectName="Project name" 
						projectUrl=""
						projectImageUrl='/photos/kumamon.jpeg'
						description='YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO'
					/>

					<Project 
						projectName="Project name" 
						projectUrl=""
						projectImageUrl='/photos/kumamon.jpeg'
						description='YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO'
					/>

					<Project 
						projectName="Project name" 
						projectUrl=""
						projectImageUrl='/photos/kumamon.jpeg'
						description='YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO YO'
					/>


				</div>

		
		</div>
		
		)
}

export default Home