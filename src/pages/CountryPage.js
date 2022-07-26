import StateList from '../components/StateList';
import CountryData from '../components/CountryData';

const CountryPage = () => (
  <>
    <CountryData />
    <p>Individual state contribution:</p>
    <StateList />
  </>
);

export default CountryPage;
