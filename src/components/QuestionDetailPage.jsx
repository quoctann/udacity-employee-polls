import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

const PollBox = ({ handlePollClick, questionContent }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Text>{questionContent}</Card.Text>
				<div className="d-grid">
					<Button variant="success" onClick={handlePollClick}>
						Click
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

const QuestionDetailPage = () => {
	const [username, avatarURL, questionContent] = [
		"some user name",
		"https://picsum.photos/200",
		"some content",
	];
	const handlePollClick = () => {
		console.log("click");
	};

	return (
		<Container className="text-center mt-4">
			<h2>Poll by {username}</h2>
			<div>
				<Image
					src={avatarURL}
					roundedCircle
					style={{ height: "10rem" }}
					className="my-4"
				/>
			</div>
			<h2>Would you rather</h2>
			<Row>
				<Col>
					<PollBox
						handlePollClick={handlePollClick}
						questionContent={questionContent}
					/>
				</Col>
				<Col>
					<PollBox
						handlePollClick={handlePollClick}
						questionContent={questionContent}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default QuestionDetailPage;
