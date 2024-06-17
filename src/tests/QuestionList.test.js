import { create } from "react-test-renderer";
import QuestionList from "../components/QuestionList";
import { questions } from "../utils/_DATA";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";
import { MemoryRouter } from "react-router-dom";

describe("Test QuestionList component", () => {
	let testStore;

	beforeAll(() => {
		testStore = createStore(reducers);
	});

	it("Should render correct QuestionList component", async () => {
		let rendering = create(
			<Provider store={testStore}>
				<MemoryRouter>
					<QuestionList questionList={Object.values(questions)} />
				</MemoryRouter>
			</Provider>
		);

		expect(rendering.toJSON()).toMatchSnapshot();
	});
});
