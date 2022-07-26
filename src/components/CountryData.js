import { useSelector } from 'react-redux';

const CountryData = () => {
  const totalFires = useSelector((state) => state.country.totalFires);
  const countryFires = useSelector((state) => state.country.currentCountryFires);
  const country = useSelector((state) => state.country.currentCountry);
  const percentage = (countryFires / totalFires) * 100;

  return (
    <>
      <h2 id="stateHeader">
        {country}
        {' '}
        currently corresponds to
        {' '}
        <p>
          {(Math.round(percentage * 100) / 100).toFixed(2)}
          %
        </p>
        {' '}
        of the total fire cases.
      </h2>
    </>
  );
};

export default CountryData;
