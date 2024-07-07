function NavBar() {
  const navBarNames = ["Home", "Astrophotography", "Softwares Used", "Tutorial"]

  return (
    <header className="relative bg-transparent p-2">
      <nav className="m-auto">
        <ul className="flex justify-center list-none m-0">
          {navBarNames.map((name) => (
            <li className="bg-transparent text-base text-white flex justify-center m-10">
              {name}
            </li> 
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar