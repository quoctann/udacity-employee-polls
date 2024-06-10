import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const QuestionCard = () => {
	const createdAt = moment().format("MMMM Do YYYY, h:mm:ss a");
	const createdBy = "some user name";
	const questionId = "some id";
	const navigate = useNavigate();
	const handleShowButtonClick = (questionId) => {
		console.log(questionId);
		navigate("/questions/" + 123);
	};

	return (
		<Card style={{ width: "18rem" }} className="m-2">
			<Card.Body>
				<Card.Title>{createdBy}</Card.Title>
				<Card.Text>{createdAt}</Card.Text>
				<div className="d-grid">
					<Button variant="outline-success" onClick={handleShowButtonClick}>
						Show
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default QuestionCard;
