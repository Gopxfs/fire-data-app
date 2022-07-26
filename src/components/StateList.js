import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStateFireCountThunk } from '../redux/Thunks';

const StateList = () => {
  const dispatch = useDispatch();

  const statesData = useSelector((state) => state.country.countryStates);
  const statesCount = useSelector((state) => state.country.stateCount);
  const statesList = [];

  useEffect(() => {
    if (statesData.length && !statesCount.length) {
      statesData.forEach((state) => {
        dispatch(getStateFireCountThunk(state));
      })
    }
  });

  statesCount.forEach((state) => {
    statesList.push(<li>{state.state}: {state.fires}</li>);
  });

  return (
    <ul>
      {statesList}
    </ul>
  );
};

export default StateList;
