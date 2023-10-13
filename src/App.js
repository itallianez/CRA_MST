import { AddUserForm, Modal } from "./components";
import {UsersScreen} from "./screens";

const App = () => {
  return (
		<>
			<UsersScreen />
			<Modal content={<AddUserForm />} />
		</>
	);
}

export default App;
