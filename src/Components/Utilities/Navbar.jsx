const Navbar = () => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <nav className="w-full flex justify-center items-center text-center py-4 bg-darkGray text-smoke sticky top-0 left-0">
        <ul className="flex space-x-8 text-lg font-semibold items-center">
          <li>
            <button onClick={() => scrollToSection("home")} className="w-[50px]">
              <img src="../public/img/logo.svg" alt="Dev.Guilherme" className="cursor-pointer"/>
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("home")} className="bg-darkGray hover:bg-lightGray py-1 px-4 rounded-lg transition duration-300 hover:text-primaryPurple cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")} className="bg-darkGray hover:bg-lightGray py-1 px-4 rounded-lg transition duration-300 hover:text-primaryPurple cursor-pointer">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")} className="bg-darkGray hover:bg-lightGray py-1 px-4 rounded-lg transition duration-300 hover:text-primaryPurple cursor-pointer">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contacts")} className="bg-darkGray hover:bg-lightGray py-1 px-4 rounded-lg transition duration-300 hover:text-primaryPurple cursor-pointer">
              Contacts
            </button>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  