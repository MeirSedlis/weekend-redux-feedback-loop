import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Understanding() {
  const [understanding, setUnderstanding] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleUnderstanding = () => {
    //dispatch the understanding to the store
    if(understanding === ''){
      alert('field cannot be blank, please enter a value')
      return false
    } else if (understanding < 0 || understanding > 5){
      alert('please choose a number between 1 and 5')
      return false
    }
    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: understanding
    });
    history.push("/support");
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <label htmlFor="understanding">Please rate how well you are understanding the content on a scale of 1 (low) to 5 (high)</label>
      <input
        type="number"
        name="understanding"
        value={understanding}
        onChange={(e) => setUnderstanding(e.target.value)}
      />
      <button onClick={handleUnderstanding}>NEXT</button>
    </div>
  );
}

export default Understanding;
