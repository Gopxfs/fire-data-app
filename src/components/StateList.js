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
    let formatedStateName = state.state.substring(1);
    formatedStateName = formatedStateName.toLowerCase();
    formatedStateName = state.state[0] + formatedStateName;
    statesList.push(
      <li key={state.state}>
        {formatedStateName}
        :
        {' '}
        {state.fires}
      </li>,
    );
  });

  return (
    <section id="states">
      <div className="listHeader">
        <p>Individual state contribution:</p>
        <select className="sortBox" onChange={(e) => { dispatch(sortStatesList(e.target.value)); }} defaultValue="">
          <option value="" disabled hidden>Sort by</option>
          <option value="higher">Higher first</option>
          <option value="lower">Lower first</option>
        </select>
      </div>
      <ul>
        {statesList}
      </ul>
    </section>
  );
};

export default StateList;
