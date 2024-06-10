import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import { APP_PATH } from "../utils/constant";
import AddQuestionPage from "./AddQuestionPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import LeaderboardPage from "./LeaderboardPage";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";

const Root = () => {
	return (
		<Container>
			<NavigationBar />
			<Outlet />
		</Container>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={APP_PATH.ROOT} element={<Root />} errorElement={<ErrorPage />}>
			<Route index element={<HomePage />} />
			<Route path={APP_PATH.LEADERBOARD} element={<LeaderboardPage />} />
			<Route path={APP_PATH.ADD_QUESTION} element={<AddQuestionPage />} />
		</Route>
	)
);

const App = ({ dispatch, authedUser }) => {
	useEffect(() => {
		dispatch(handleInitialData());
	}, []);

	return authedUser ? <RouterProvider router={router} /> : <LoginPage />;
};

const mapStateToProps = ({ authedUser }) => ({
	authedUser,
});

export default connect(mapStateToProps)(App);
