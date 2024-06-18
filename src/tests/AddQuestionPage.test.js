import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import AddQuestionPage from "../components/AddQuestionPage";

const mockStore = configureMockStore();

describe("Test AddQuestionPage component", () => {
	let store;

	beforeEach(() => {
		const initialState = {
			authedUser: {
				id: "tylermcginnis",
				password: "abc321",
				name: "Tyler McGinnis",
			},
		};
		store = mockStore(initialState);
	});

	it("Should render correct AddQuestionPage component", () => {
		const component = render(
			<Provider store={store}>
				<MemoryRouter>
					<AddQuestionPage />
				</MemoryRouter>
			</Provider>
		);

		const optOneInput = component.getByPlaceholderText("Option One");
		fireEvent.change(optOneInput, { target: { value: "Changed One" } });

		const optTwoInput = component.getByPlaceholderText("Option Two");
		fireEvent.change(optTwoInput, { target: { value: null } });

		const submitBtn = component.getByText("Submit");
		expect(submitBtn).toBeInTheDocument();

		fireEvent.click(submitBtn);
		const errMsg = component.getByText("Input must not empty");
		expect(errMsg).toBeInTheDocument();
	});
});
