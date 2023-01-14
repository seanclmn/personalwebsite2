import { Header, NavLink } from "@mantine/core"
const Navbar = () => {
  return(
    <Header
      height={"50px"}
      sx={{backgroundColor: "00FFFFFF"}}
      >
      <div
        className="
          w-[100%]
          "      
        >
        <ul
          className="
            flex
            flex-row
            justify-around
            py-[15px]
            max-w-[400px]
            ml-auto
            list-none	
          "
          >
  
          <a href="#projects">
            <li className="cursor-pointer">
              Projects 
            </li>
          </a>
  
          <a
            href="/resume_2022.pdf"
            target="_blank"
            >
            <li className="cursor-pointer">
              Resumé
            </li>
          </a>
  
          {/* <a href="">
            <li className="cursor-pointer"></li>
          </a> */}
  
          <a href="#about">
            <li className="cursor-pointer">About</li>
          </a>
        </ul>
      </div>
    </Header>
    )
}

export default Navbar