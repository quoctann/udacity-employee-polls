import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import ErrorPage from "../components/ErrorPage";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";

const Root = () => {
	return (
		<Container>
			<NavigationBar />
		</Container>
	);
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
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
