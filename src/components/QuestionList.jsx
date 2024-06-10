import { Card } from "react-bootstrap";
import QuestionCard from "./QuestionCard";

const QuestionList = (props) => {
	const { title } = props;
	const mockQuestionList = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			<Card className="my-4 p-1">
				<Card.Header as="h3" className="text-center">
					{title}
				</Card.Header>
				<Card.Body>
					<div className="d-flex flex-wrap">
						{mockQuestionList.map((i) => (
							<QuestionCard key={i} />
						))}
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default QuestionList;
