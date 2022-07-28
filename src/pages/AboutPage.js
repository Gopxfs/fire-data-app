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
          This application showcases the number of focused fires in South America in the last 24
          hours, allowing the user to specify the data by country and state.
          All information is gathered from the INPE (National Institute for Space Research).
          <br />
          <a href="https://queimadas.dgi.inpe.br/queimadas/dados-abertos/#">Click here to learn more.</a>
        </p>
        <p>
          The data is updated every 20 seconds, making minor differences completely possible.
        </p>
        <p>
          This project was made by
          {' '}
          <a href="https://github.com/Gopxfs">Gabriel Fonseca</a>
          , following Microverse&apos;s guidelines.
          Feel free to check my
          {' '}
          <a href="https://www.linkedin.com/in/gabriel-fonseca-sales/">LinkedIn</a>
          {' '}
          and my
          {' '}
          <a href="https://github.com/Gopxfs?tab=repositories">other projects.</a>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
