import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
			<Container>
				<Nav className="me-auto">
					<Nav.Link>
						<Link className="link-underline-opacity-0">Home page</Link>
					</Nav.Link>
					<Nav.Link>
						<Link className="link-underline-opacity-0">Leader board</Link>
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link>
						<Image
							src="https://picsum.photos/200"
							rounded
							style={{ height: "2rem" }}
						/>
					</Nav.Link>
					<Nav.Link>Username here</Nav.Link>
					<Nav.Link>Sign out</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavigationBar;
