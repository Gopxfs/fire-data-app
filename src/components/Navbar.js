import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHamburger } from '../redux/FunctionalitySlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isHamburgerOpened = useSelector((state) => state.functionality.isHamburgerOpened);

  return (
    <nav>
      {isHamburgerOpened
        ? (
          <>
            <button type="button" className="hamburger" onClick={() => { dispatch(toggleHamburger()); }}> </button>
            <div id="navLinks" className="hidden">
              <NavLink to="/">
                HomePage
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
