import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Comments() {
  const [comments, setComments] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleComments = () => {
    //dispatch the support to the store
    dispatch({
      type: "SET_COMMENT",
      payload: comments,
    });
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
