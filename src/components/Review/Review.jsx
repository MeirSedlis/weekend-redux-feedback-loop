import { HashRouter as Router, Route, Link } from "react-router-dom";

function Review() {
  return (
    <div>
      <h1>Review your feedback</h1>
      <Link to="/thankYou">
        <button>submit feedback</button>
      </Link>
    </div>
  );
}

export default Review;
