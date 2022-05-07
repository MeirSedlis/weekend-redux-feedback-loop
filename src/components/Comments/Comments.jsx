import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Comments() {
  const [comments, setComments] = useState(0);
  const history = useHistory();

  const handleComments = () => {
    //dispatch the support to the store
    history.push("/review");
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <label htmlFor="comments">Comments?</label>
      <input
        type="textarea"
        name="comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button onClick={handleComments}>NEXT</button>
    </div>
  );
}

export default Comments;
