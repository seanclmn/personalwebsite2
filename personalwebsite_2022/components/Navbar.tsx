import { Header, NavLink } from "@mantine/core"
const Navbar = () => {
  return(
    <Header
      height={50}
      >

      <div
        className="
          w-[100%]
          bg-gradient-to-b from-indigo-600 to-indigo-500
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
  
          <a>
            <li className="cursor-pointer">
              Resumé
            </li>
          </a>
  
          <a href="">
            <li className="cursor-pointer">Social</li>
          </a>
  
          <a href="#about">
            <li className="cursor-pointer">About</li>
          </a>
        </ul>
      </div>
    </Header>
    )
}

export default Navbar