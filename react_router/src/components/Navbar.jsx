import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      {/*Usando o is-active, padrao do navlink*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>

      {/*<Link to={"/"}>Home</Link>
      <Link to={"/about"}>Sobre</Link>*/}
    </nav>
  );
};

export default Navbar;
