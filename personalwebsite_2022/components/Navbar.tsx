const Navbar = () => {
  return(
    <nav>
      <ul
        className="
          flex
          flex-row
          justify-around
          pb-[20px]
        "
        >
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Resumé</li>
        <li className="cursor-pointer">Social</li>
      </ul>
    </nav>
    )
}

export default Navbar