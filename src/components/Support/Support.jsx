import { HashRouter as Router, Route, Link } from "react-router-dom";

function Support(){
    return (
        <div>
        <h1>How well are you being supported?</h1>
        <label htmlFor="support">Support?</label>
      <input type="number" name="support" />
        <Link to="/comments"><button>NEXT</button></Link>
        </div>
    )
}

export default Support;