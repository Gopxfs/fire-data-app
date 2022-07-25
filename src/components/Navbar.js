import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <NavLink to="/">
      HomePage
    </NavLink>
    <NavLink to="/about">
      About
    </NavLink>
  </>
);

export default Navbar;
