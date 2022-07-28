import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StateList from '../components/StateList';
import CountryData from '../components/CountryData';
import { closeHamburger } from '../redux/FunctionalitySlice';

const CountryPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="backToHomepage">
        <Link to="/" onClick={() => dispatch(closeHamburger())}>Back to homepage</Link>
      </div>
      <CountryData />
      <StateList />
    </>
  );
};

export default CountryPage;
