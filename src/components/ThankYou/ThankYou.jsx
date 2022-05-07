import { HashRouter as Router, Route, Link } from "react-router-dom";

function ThankYou(){
    return (
        <div>
        <h1>Thank You!</h1>
        <Link to="/"><button>Leave New Feedback</button></Link>
        </div>
    )
}

export default ThankYou;