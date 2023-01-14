import { AppShell, Button, Space, Title } from "@mantine/core"
import Link from "next/link"
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
						Hi, I&#39;m Sean Coleman.
            <br/>
						<span
							className="text-5xl sm:text-2xl md:text-4xl"
						 >
						I&#39;m a Software Developer.
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
						projectUrl="https://writer-seanclmn.vercel.app/signin"
						projectImageUrl='/photos/writer.png'
						nextProjectUrl="#kanji"
						description='
							This is a web application for writing and publishing blogs.
							The frontend is built using React+Typescript and Chakra UI.
							State management is handled with Zustand and React Query. 
							Authentication and backend services are handled by Firebase.
						'
					/>
					<div id="kanji"></div>
					<Project 
						projectName="Kanji" 
						projectUrl="https://kanji-ecru.vercel.app/quizzes"
						projectImageUrl='/photos/kanji.png'
						nextProjectUrl=""
						description='
							This is a web application for testing your kanji knowledge.
							The frontend is built using React+Typescript and Mantine UI.
							State management is handled with Redux. 
							
						'
					/>

				</div>

				{/* <Link href="#about" ><div className="mx-auto"><Button >About me</Button></div></Link> */}


				{/* ABOUT */}

				<div id="about"></div>
				<div
					className="w-[100%] h-[100vh] flex flex-col items-center text-center mt-[100px]"
					>
					<Title>About me</Title>						
					<p
						className='mt-[80px] text-left max-w-[800px]'
						>
						I am a frontend developer with experience working with frontend frameworks and libraries like 
						React, Angular, AngularJS, as well testing libraries like Cypress, Jest, and Jasmine/Karma. 
						I also have built projects involving backend tools like Node+Express, and Mongoose+MongoDB. 
						I also speak fluent Japanese and English, and intermediate level French.
						<br/><br/>
						I have a Physics B.S. (2021) from Indiana University. After graduating, I joined General Assembly 
						to study Software Engineering. I then landed my first full-time software development job at 
						Exclaimer, where I developed new features and resolved critical bugs for their appointments booking site
						and dashboard (AngularJS and Redux), as well as E2E test using Cypress. I also worked on a rewrite of the 
						legacy application in Angular 13, with unit testing using Jest.
						<br/><br/>
						Currently, I am looking for new opportunities in software development. I am looking for frontend roles 
						but am also open to full-stack positions.
					</p>

				</div>



		
		</AppShell>
		
		)
}

export default Home