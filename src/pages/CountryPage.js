import { Link } from 'react-router-dom';
import StateList from '../components/StateList';
import CountryData from '../components/CountryData';

const CountryPage = () => (
  <>
    <Link to="/">Back</Link>
    <CountryData />
    <p>Individual state contribution:</p>
    <StateList />
  </>
);

export default CountryPage;
