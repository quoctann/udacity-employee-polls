import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { authenticateUser } from "../actions/shared";
import { APP_PATH } from "../utils/constant";

function NavigationBar(props) {
	const [username, avatarUrl] = [
		props?.authedUser?.name,
		props?.authedUser?.avatarURL,
	];

	const handleLogout = () => {
		props.dispatch(authenticateUser(null));
		redirect(APP_PATH.ROOT);
	};

	return (
		<Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
				<Nav className="me-auto">
					<Link to="/" className="nav-link link-underline-opacity-0">
						Home
					</Link>
					<Link to="/leaderboard" className="nav-link link-underline-opacity-0">
						Leaderboard
					</Link>
					<Link to="/add" className="nav-link link-underline-opacity-0">
						New
					</Link>
				</Nav>
				<Nav>
					<Nav.Link>
						<Image src={avatarUrl} roundedCircle style={{ height: "2rem" }} />
					</Nav.Link>
					<Nav.Link>{username}</Nav.Link>
					<Nav.Link onClick={handleLogout}>Sign out</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

const mapStateToProps = ({ authedUser }) => ({
	authedUser,
});

export default connect(mapStateToProps)(NavigationBar);
