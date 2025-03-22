import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeTogle";

const Navbar = () => {
  return (
    <nav id = "navigation">
      <Link to="/Home">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/hobbies">Hobbies</Link>
      <Link to="/results">Marks</Link>
      <Link to="/career">Career</Link>
      <Link to="/contact">Contact Me</Link>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;

