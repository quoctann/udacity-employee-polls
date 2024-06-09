import Container from "react-bootstrap/Container";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<Container>
			<div id="error-page" className="text-center mt-2">
				<h1>Oops!</h1>
				<p>Unexpected error occurred</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<Link to={`/`}>Go to homepage</Link>
			</div>
		</Container>
	);
}
