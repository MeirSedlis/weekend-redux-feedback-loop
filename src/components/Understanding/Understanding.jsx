import { HashRouter as Router, Route, Link } from "react-router-dom";

function Understanding(){
    return (
        <div>
        <h1>How well are you understanding the content?</h1>
        <label htmlFor="understanding">Understanding?</label>
      <input type="number" name="understanding" />
        <Link to="/support"><button>NEXT</button></Link>
        </div>
    )
}

export default Understanding;