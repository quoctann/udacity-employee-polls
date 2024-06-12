import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import QuestionList from "./QuestionList";

const HomePage = (props) => {
	const {
		questions,
		authedUser: { id },
	} = props;

	const [answered, unanswered] = [[], []];

	Object.values(questions)
		.sort((first, second) => second.timestamp - first.timestamp)
		.forEach((q) => {
			if ([...q.optionOne.votes, ...q.optionTwo.votes].includes(id)) {
				answered.push(q);
				return;
			}
			unanswered.push(q);
		});

	return (
		<Container>
			<QuestionList
				title={"New Question"}
				questionList={unanswered}
				isAnswered={false}
			/>
			<QuestionList title={"Done"} questionList={answered} isAnswered={true} />
		</Container>
	);
};

const mapStateToProps = ({ questions, authedUser }) => ({
	questions,
	authedUser,
});

export default connect(mapStateToProps)(HomePage);
