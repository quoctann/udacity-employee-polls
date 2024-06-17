// import { Provider } from "react-redux";
// import { MemoryRouter } from "react-router-dom";
// import { create } from "react-test-renderer";
// import { createStore } from "redux";
// import QuestionCard from "../components/QuestionCard";
// import reducers from "../reducers";
// import { fireEvent, screen } from "@testing-library/react";

// describe("Test QuestionCard component", () => {
// 	let testStore;

// 	beforeAll(() => {
// 		testStore = createStore(reducers);
// 	});

// 	it("Should render correct QuestionList component", async () => {
// 		const question = {
// 			id: "vthrdm985a262al8qx3do",
// 			author: "tylermcginnis",
// 			timestamp: 1467166872634,
// 		};

// 		let rendering = create(
// 			<Provider store={testStore}>
// 				<MemoryRouter>
// 					<QuestionCard question={question} isAnswered={true} />
// 				</MemoryRouter>
// 			</Provider>
// 		);
// 		const showBtn = screen.getByText("Show");
// 		fireEvent.click(showBtn);

// 		expect(rendering.toJSON()).toMatchSnapshot();
// 	});
// });
