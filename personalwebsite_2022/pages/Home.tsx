import { AppShell, Button } from "@mantine/core"
import Navbar from '../components/Navbar'
import Project from "../components/Project"

const Home = () =>{
	return(
		<AppShell
			header={<Navbar/>}
			>
				{/* TITLE */}
				<div
					className="
						pt-[20vh] text-left h-[100vh] w-[80%] max-w-[800px] ml-[100px]
						sm:ml-[40px]
						md:ml-[60px]
						"
					>
					<p 
						className="
							text-7xl sm:text-2xl md:text-4xl
							"
						>
						Hi, I'm Sean Coleman.
            <br/>
						<span
							className="text-5xl sm:text-2xl md:text-4xl"
						 >
						I'm a Software Developer.
						</span>
					</p>
					<a href="#projects">
						<Button
							variant="outline"
							color="grape"
							size="lg"
							radius="md"
							className="index mt-[100px] relative z-0 bg-transparent border-8"
							sx={{borderWidth: "2px", fontWeight:"normal"}}
							> 
							Explore my projects
						</Button>
					</a>

				</div>

				<div
					id="projects"
					className="w-[100%] h-auto flex flex-col items-center"
					>
					<Project 
						projectName="Writer" 
						projectUrl=""
						projectImageUrl='/photos/writer.png'
						description='
							This is a web application for writing and publishing blogs.
							The frontend is built using React+Typescript and Chakra UI.
							State management is handled with Zustand and React Query. 
							Authentication and backend services are handled by Firebase.
						'
					/>

					<Project 
						projectName="Kanji" 
						projectUrl=""
						projectImageUrl='/photos/kanji.png'
						description='
							This is a web application for testing your kanji knowledge.
							The frontend is built using React+Typescript and Mantine UI.
							State management is handled with Redux. 
							
						'
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
					className="w-[100%] h-[100vh] flex flex-col items-center text-center"
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