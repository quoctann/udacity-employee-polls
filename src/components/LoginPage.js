import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
	return (
		<Container>
			<h1 className="mt-4 text-center">Login</h1>
			<Card style={{ width: "40rem" }} className="p-4 mx-auto mt-4">
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="email" placeholder="User ID" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<div className="d-grid gap-2">
						<Button variant="primary" type="submit" size="lg">
							Login
						</Button>
					</div>
				</Form>
			</Card>
		</Container>
	);
};

export default LoginPage;
