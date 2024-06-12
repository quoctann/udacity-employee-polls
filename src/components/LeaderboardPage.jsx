import { Container, Image, Table } from "react-bootstrap";
import { connect } from "react-redux";

const RowData = ({ id, avatarUrl, name, questions, answers }) => {
	return (
		<tr>
			<td>
				<div className="d-flex">
					<div>
						<Image src={avatarUrl} roundedCircle style={{ height: "4rem" }} />
					</div>
					<div>
						<p className="ms-2 fw-bold mb-1">{name}</p>
						<p className="ms-2 mb-1">{id}</p>
					</div>
				</div>
			</td>
			<td>{Object.values(answers).length}</td>
			<td>{questions?.length}</td>
		</tr>
	);
};

const Leaderboard = (props) => {
	const { users } = props;

	const sortedUserList = Object.values(users).sort(
		(u1, u2) =>
			u2.questions.length +
			Object.values(u2.answers).length -
			(u1.questions.length + Object.values(u1.answers).length)
	);

	return (
		<Container>
			<Table bordered hover className="mt-4">
				<thead>
					<tr>
						<th>User</th>
						<th>Answered</th>
						<th>Created</th>
					</tr>
				</thead>
				<tbody>
					{sortedUserList.map((user, index) => (
						<RowData
							key={`${index}${user.id}`}
							id={user.id}
							avatarUrl={user.avatarURL}
							name={user.name}
							questions={user.questions}
							answers={user.answers}
						/>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(Leaderboard);
