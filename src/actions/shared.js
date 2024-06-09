import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
	return (dispatch) => {
		return getInitialData().then(({ users }) => {
			dispatch(setAuthedUser(null));
		});
	};
}
