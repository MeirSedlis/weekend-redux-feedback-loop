import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Support() {
  const [support, setSupport] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSupport = () => {
    //dispatch the support to the store
    if(support === ''){
      alert('field cannot be blank, please enter a value')
      return false
    } else if (support < 0 || support > 5){
      alert('please choose a number between 1 and 5')
      return false
    }
    dispatch({
      type: 'SET_SUPPORT',
      payload: support
    });
    history.push("/comments");
  };
  
  return (
    <div>
      <h1>How well are you being supported?</h1>
      <label htmlFor="support">Please rate how supported you feel on a scale of 1 (low) to 5 (high)</label>
      <input
        type="number"
        name="support"
        value={support}
        onChange={(e) => setSupport(e.target.value)}
      />
      <button onClick={handleSupport}>NEXT</button>
    </div>
  );
}

export default Support;
