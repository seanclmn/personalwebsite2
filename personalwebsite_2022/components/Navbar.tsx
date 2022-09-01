const Navbar = () => {
  return(
    <nav
      className="
        border-b-[1px]
        border-solid
        border-gray-300
        mb-4
        fixed
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
        "
        >
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Resumé</li>
        <li className="cursor-pointer">Social</li>
        <li className="cursor-pointer">About</li>
      </ul>
    </nav>
    )
}

export default Navbar