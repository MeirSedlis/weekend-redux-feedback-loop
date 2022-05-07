import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function Feeling() {
    const [feeling, setFeeling] = useState(0);
    const history = useHistory();

    const handleFeelings = () => {
        //dispatch the feeling to the store
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
