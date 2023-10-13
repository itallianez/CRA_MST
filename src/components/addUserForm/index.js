import { useState, useEffect } from "react";
import useStore from "../../hooks/useStore";
import { Input } from "../input";
import { Divider } from "../divider";
import { Button } from "../button";

const NEW_USER = {
	name: "",
	username: "",
	email: "",
};

export const AddUserForm = () => {

	const { isModal, closeModal, addUser } = useStore();
	const [newUser, setNewUser] = useState(NEW_USER);

	const onChange = e => {
		const { value, name } = e.target;
		setNewUser({ ...newUser, [name]: value });
	};

	const clear = () => {
		setNewUser(NEW_USER);
	};

	const createUser = () => {
		addUser({
			id: Number(new Date()),
			...newUser,
		});
		closeModal();
	};

	useEffect(() => {
		!isModal && setNewUser(NEW_USER);
	}, [isModal]);

	return (
		<div>
			<Input
				value={newUser.name}
				name="name"
				onChange={onChange}
				placeholder="Enter name"
			/>
			<Divider vertical={16} />
			<Input
				value={newUser.username}
				name="username"
				onChange={onChange}
				placeholder="Enter username"
			/>
			<Divider vertical={16} />
			<Input
				value={newUser.email}
				name="email"
				onChange={onChange}
				placeholder="Enter email"
			/>
			<Divider vertical={16} />
			<div>
				<Button title="Save" onClick={createUser} main />
				<Divider horizontal={8} vertical={8} />
				<Button title="Clear" onClick={clear} />
			</div>
		</div>
	);
};
