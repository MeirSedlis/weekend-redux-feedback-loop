import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Review() {
  let feelings = useSelector((store) => store.feelingReducer);
  let understanding = useSelector((store) => store.understandingReducer);
  let support = useSelector((store) => store.supportReducer);
  let comments = useSelector((store) => store.commentReducer);

  return (
    <div>
      <h1>Review your feedback</h1>

      <h3>Feelings:</h3>
        <p>{feelings}</p>

      <h3>Understanding:</h3>
        <p>{understanding}</p>

      <h3>Support:</h3>
         <p>{support}</p>

      <h3>Comments:</h3>
        <p>{comments}</p>
        
      <Link to="/thankYou">
        <button>submit feedback</button>
      </Link>
    </div>
  );
}

export default Review;
