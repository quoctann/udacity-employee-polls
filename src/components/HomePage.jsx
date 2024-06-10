import { Container } from "react-bootstrap";
import QuestionList from "./QuestionList";

const HomePage = () => {
	return (
		<Container>
			<QuestionList title={"New Question"} />
			<QuestionList title={"Done"} />
		</Container>
	);
};

export default HomePage;
