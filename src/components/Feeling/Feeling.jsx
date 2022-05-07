import { HashRouter as Router, Route, Link } from "react-router-dom";

function Feeling(){
    return (
        <div>
            <h1>How are you feeling today?</h1>
            <Link to="/understanding"><button>NEXT</button></Link>
        </div>
    )
}

export default Feeling;