import { useSelector } from "react-redux";

const CountryData = (props) => {
  const totalFires = useSelector((state) => state.country.totalFires);
  const countryFires = useSelector((state) => state.country.currentCountryFires);

  return (
    <>
      <p>{totalFires}</p>
      <p>{countryFires}</p>
    </>
  )
}

export default CountryData;
