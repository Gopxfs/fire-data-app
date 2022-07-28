import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeHamburger } from '../redux/FunctionalitySlice';

const AboutPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="backToHomepage">
        <Link to="/" onClick={() => dispatch(closeHamburger())}>Back to homepage</Link>
      </div>
      <div id="about">
        <h2>About</h2>
        <p>
          This application showcases the number of daily focused fires in South America, allowing
          the user to specify the data by country, state, and city.
          All information is gathered from the INPE (National Institute for Space Research),
          {' '}
          <a href="https://queimadas.dgi.inpe.br/queimadas/dados-abertos/#">click here to learn more.</a>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
