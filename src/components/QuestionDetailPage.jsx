import { useState } from "react";
import {
	Badge,
	Button,
	Card,
	Col,
	Container,
	Image,
	Row,
	Stack,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import ErrorPage from "./ErrorPage";

const PollBox = ({
	handlePollClick,
	questionContent,
	answerType,
	isAnswered,
	voteCount,
	percentage,
	optionData,
	userId,
}) => {
	const isSelected = optionData.votes.includes(userId);
	const className = isSelected ? "bg-success-subtle border border-success" : "";

	return (
		<Card>
			<Card.Body className={className}>
				<Card.Text>{questionContent}</Card.Text>
				{isAnswered ? (
					<Stack direction="horizontal" gap={2} className="mb-3">
						<Badge pill bg="primary">
							Votes: {voteCount}
						</Badge>
						<Badge pill bg="info">
							Percentage: {Math.round(percentage)}%
						</Badge>
					</Stack>
				) : (
					""
				)}
				<div className="d-grid">
					<Button
						variant="success"
						disabled={isAnswered}
						onClick={() => handlePollClick(answerType)}
					>
						Click
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

const AnsweredPollBoxes = ({ questions, questionId, userId }) => {
	const question = Object.values(questions).find((q) => q.id === questionId);

	if (!question) return null;

	const totalVotes =
		question.optionOne.votes.length + question.optionTwo.votes.length;

	return (
		<>
			<Col>
				<PollBox
					handlePollClick={() => {}}
					questionContent={question.optionOne.text}
					answerType={"optionOne"}
					isAnswered={true}
					voteCount={question.optionOne.votes.length}
					percentage={(question.optionOne.votes.length / totalVotes) * 100}
					optionData={question.optionOne}
					userId={userId}
				/>
			</Col>
			<Col>
				<PollBox
					handlePollClick={() => {}}
					questionContent={question.optionTwo.text}
					answerType={"optionTwo"}
					isAnswered={true}
					voteCount={question.optionTwo.votes.length}
					percentage={(question.optionTwo.votes.length / totalVotes) * 100}
					optionData={question.optionTwo}
					userId={userId}
				/>
			</Col>
		</>
	);
};

const QuestionDetailPage = (props) => {
	const {
		questions,
		authedUser: { id, avatarURL },
		dispatch,
	} = props;

	const { state } = useLocation();
	const { question_id: questionId } = useParams();
	const [userAnswered, setUserAnswered] = useState(false);

	let [optionOne, optionTwo, isAnswered] = [null, null, null];

	// Case enter by URL
	if (!state) {
		const existedQuestion = Object.values(questions).find(
			(q) => q?.id === questionId
		);
		if (!existedQuestion) {
			return <ErrorPage code={404} status={"Not Found"} />;
		}

		optionOne = existedQuestion.optionOne;
		optionTwo = existedQuestion.optionTwo;
		isAnswered = existedQuestion.isAnswered;
	} else {
		// Case redirect from homepage
		optionOne = state.optionOne;
		optionTwo = state.optionTwo;
		isAnswered = state.isAnswered;
	}

	const totalVotes = optionOne.votes.length + optionTwo.votes.length;

	const handlePollClick = (answer) => {
		dispatch(
			handleAnswerQuestion({
				userId: id,
				questionId,
				answer,
			})
		);
		setUserAnswered(true);
	};

	return (
		<Container className="text-center mt-4">
			<h2>Poll by {id}</h2>
			<div>
				<Image
					src={avatarURL}
					roundedCircle
					style={{ height: "10rem" }}
					className="my-4"
				/>
			</div>
			<h2 className="mb-4">Would you rather</h2>
			<Row>
				{userAnswered ? (
					<AnsweredPollBoxes
						questions={questions}
						questionId={questionId}
						userId={id}
					/>
				) : (
					<>
						<Col>
							<PollBox
								handlePollClick={handlePollClick}
								questionContent={optionOne.text}
								answerType={"optionOne"}
								isAnswered={isAnswered}
								voteCount={optionOne.votes.length}
								percentage={(optionOne.votes.length / totalVotes) * 100}
								optionData={optionOne}
								userId={id}
							/>
						</Col>
						<Col>
							<PollBox
								handlePollClick={handlePollClick}
								questionContent={optionTwo.text}
								answerType={"optionTwo"}
								isAnswered={isAnswered}
								voteCount={optionTwo.votes.length}
								percentage={(optionTwo.votes.length / totalVotes) * 100}
								optionData={optionTwo}
								userId={id}
							/>
						</Col>
					</>
				)}
			</Row>
		</Container>
	);
};

const mapStateToProps = ({ questions, authedUser }) => ({
	questions,
	authedUser,
});

export default connect(mapStateToProps)(QuestionDetailPage);
