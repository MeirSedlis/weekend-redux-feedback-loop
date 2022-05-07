import { HashRouter as Router, Route, Link } from "react-router-dom";

function Comments(){
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <label htmlFor="comments">Comments?</label>
      <input type="text" name="comments" />
            <Link to="/review"><button>NEXT</button></Link>
        </div>
    )
}

export default Comments;