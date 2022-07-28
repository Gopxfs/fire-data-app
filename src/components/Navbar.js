import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburger } from '../redux/FunctionalitySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isHamburgerOpened = useSelector((state) => state.functionality.isHamburgerOpened);

  return (
    <nav>
      <div id="navDesktop" className="desktop">
        <NavLink to="/">
          Homepage
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </div>
      {isHamburgerOpened
        ? (
          <>
            <button type="button" className="hamburger openHamburger" onClick={() => { dispatch(toggleHamburger()); }}> </button>
            <div id="navLinks" className="hidden">
              <NavLink to="/">
                Homepage
              </NavLink>
              <NavLink to="/about">
                About
              </NavLink>
            </div>
          </>
        )
        : (
          <>
            <button type="button" className="hamburger" onClick={() => { dispatch(toggleHamburger()); }}> </button>
          </>
        )}
    </nav>
  );
};

export default Navbar;
