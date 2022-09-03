import Navbar from '../components/Navbar'
import Project from '../components/Project'

import { AppShell, Button } from '@mantine/core'

const Home = () =>{
	return(
		<AppShell
			header={<Navbar/>}
			>

				{/* TITLE */}


				<div
					className="
						pt-[20vh]
						text-left
						h-[100vh]
						w-[80%]
						mx-auto
						z-0
						"
					>
					<h2 
						className="
							text-7xl"
						>
						Sean Coleman
						<br/>
						<span
							className="text-3xl"
						 >
						Frontend Developer
						</span>
					</h2>
					<a href="#projects">
						<Button
							className="
								index
								mt-[100px]
								relative
								z-0
								"
							> 
							Explore my projects
						</Button>
					</a>

				</div>







				<div
					id="projects"
					className="
						w-[100%]
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


				{/* ABOUT */}


				<div
					id="about"
					className="
					w-[100%]
					h-[100vh]
					flex
					flex-col
					items-center
					text-center
					"
					>
					<p
						className='mt-[80px]'
						>
						I am a frontend developer who is enthusiastic about React. I am also fluent in Japanese and English.
					</p>

				</div>



		
		</AppShell>
		
		)
}

export default Home