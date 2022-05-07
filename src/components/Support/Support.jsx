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
    dispatch({
      type: 'SET_SUPPORT',
      payload: support
    });
    history.push("/comments");
  };
  
  return (
    <div>
      <h1>How well are you being supported?</h1>
      <label htmlFor="support">Support?</label>
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
