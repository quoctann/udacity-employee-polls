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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";
import { APP_PATH } from "../utils/constant";

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

const QuestionDetailPage = (props) => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { question_id: questionId } = useParams();
	const { optionOne, optionTwo, isAnswered } = state;
	const {
		authedUser: { id, avatarURL },
		dispatch,
	} = props;

	const totalVotes = optionOne.votes.length + optionTwo.votes.length;

	const handlePollClick = (answer) => {
		dispatch(
			handleAnswerQuestion({
				userId: id,
				questionId,
				answer,
			})
		);
		navigate(APP_PATH.ROOT);
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
			</Row>
		</Container>
	);
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(QuestionDetailPage);
