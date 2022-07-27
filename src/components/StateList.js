import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStateFireCountThunk } from '../redux/Thunks';
import { sortStatesList } from '../redux/CountrySlice';

const StateList = () => {
  const dispatch = useDispatch();

  const statesData = useSelector((state) => state.country.countryStates);
  const statesCount = useSelector((state) => state.country.stateCount);
  const statesList = [];

  useEffect(() => {
    if (statesData.length && !statesCount.length) {
      statesData.forEach((state) => {
        dispatch(getStateFireCountThunk(state));
      });
    }
  });

  statesCount.forEach((state) => {
    statesList.push(
      <li key={state.state}>
        {state.state}
        :
        {' '}
        {state.fires}
      </li>,
    );
  });

  return (
    <>
      <select onChange={(e) => { dispatch(sortStatesList(e.target.value)); }} defaultValue="">
        <option value="" disabled hidden>Sort by</option>
        <option value="higher">Higher first</option>
        <option value="lower">Lower first</option>
      </select>
      <ul>
        {statesList}
      </ul>
    </>
  );
};

export default StateList;
