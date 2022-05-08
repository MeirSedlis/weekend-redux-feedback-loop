import { HashRouter as Router, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review() {
    const history = useHistory();
    

  let feeling = useSelector((store) => store.feelingReducer);
  let understanding = useSelector((store) => store.understandingReducer);
  let support = useSelector((store) => store.supportReducer);
  let comments = useSelector((store) => store.commentReducer);

    const handleSubmit = () => {
        let newSurvey = {feeling, understanding, support, comments};

        axios({
            method: "POST",
            url: "/feedback",
            data: newSurvey
        })
        history.push("/thankYou")
    }

  return (
    <div>
      <h1>Review your feedback</h1>

      <h3>Feelings:</h3>
        <p>{feeling}</p>

      <h3>Understanding:</h3>
        <p>{understanding}</p>

      <h3>Support:</h3>
         <p>{support}</p>

      <h3>Comments:</h3>
        <p>{comments}</p>

        <button onClick={handleSubmit}>submit feedback</button>
      
    </div>
  );
}

export default Review;
