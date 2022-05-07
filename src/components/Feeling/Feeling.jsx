import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'

function Feeling() {
    const [feeling, setFeeling] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeelings = () => {
        //dispatch the feeling to the store
        dispatch({
          type: 'SET_FEELINGS',
          payload: feeling
        });
        history.push('/understanding')
    }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <label htmlFor="feeling">Feeling?</label>
      <input 
        type="number" 
        name="feeling" 
        value={feeling}
        onChange={(e)=> setFeeling(e.target.value)}/>
        <button onClick={handleFeelings}>NEXT</button>
    
    </div>
  );
}

export default Feeling;
