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
        if(feeling === ''){
          alert('field cannot be blank, please enter a value')
          return false
        } else if (feeling < 0 || feeling > 5){
          alert('please choose a number between 1 and 5')
          return false
        }
        dispatch({
          type: 'SET_FEELINGS',
          payload: feeling
        });
        history.push('/understanding')
    }

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <label htmlFor="feeling">Please rate your feelings on a scale of 1 (low) - 5 (high) </label>
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
