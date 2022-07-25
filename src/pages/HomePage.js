import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryFireCountThunk } from '../redux/CountrySlice';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryFireCountThunk());
  }, []);
  const countryCount = useSelector((state) => state.country.countryCount);
  console.log(countryCount);
  let counter = 0;
  countryCount.forEach((country) => {
    counter += country[1];
  })

  return (<p>Daily focused fire count in South America: {counter}</p>);
};

export default HomePage;
