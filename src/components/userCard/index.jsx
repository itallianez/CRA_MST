import React, { useState } from "react";
import { EditIcon, UserIcon, DeleteIcon } from "../../assets/icons";

import { PINK } from "../../const/colors";

import styles from './userCard.module.css'
import { Toggle } from "../toggle";
import { Divider } from "../divider";
import { ItemActionBtn } from "../itemActionBtn";
import useStore from "../../hooks/useStore";
import { Button } from "../button";
import { Input } from "../input";

export const UserCard = ({id, name, username, email}) => {

	const {deleteUser, updateUser} = useStore()
	const [isFrozen, setIsFrozen] = useState(false)
	const [isEditable, setIsEditable] = useState(false)
	const [userData, setUserData] = useState({
		id,
		name,
		username,
		email
	})

	const deleteCurrentUser = () => {
		deleteUser(id)
	}

	const setFrozen = () => {
		isFrozen && setIsEditable(false)
		setIsFrozen(!isFrozen)
	}

	const onInput = (e) => {
		const {value, name} = e.target;
		setUserData({ ...userData, [name]: value });
	}

	const saveChanges = () => {
		setIsEditable(false);
		updateUser(userData);
	}

	const cancelChanges = () => {
		setIsEditable(false)
		setUserData({...userData, 'name': name})
	}

	return (
		<div className={styles.card_wrapper}>
			<div className={styles.avatar}>
				<UserIcon color={PINK} />
			</div>
			<div className={styles.info_wrapper}>
				<Input
					value={userData.name}
					onChange={onInput}
					name="name"
					placeholder="Enter name"
					readOnly={!isEditable}
					className={styles.name}
				/>
				<div className={styles.description}>{userData.username}</div>
				<div className={styles.description}>{userData.email}</div>
				{isEditable && (
					<div className={styles.update_buttons}>
						<Button onClick={saveChanges} title="Save" main />
						<Button onClick={cancelChanges} title="Cancel" />
					</div>
				)}
			</div>
			<div className={styles.actions_wrapper}>
				<Toggle
					title="Editable"
					onChange={setFrozen}
					checked={isFrozen}
					disabled={isEditable}
				/>
				<Divider vertical={16} horizontal={16} />
				<div className={styles.item_actions}>
					<ItemActionBtn
						onClick={deleteCurrentUser}
						icon={<DeleteIcon color={PINK} />}
						disabled={isEditable}
					/>
					<Divider horizontal={8} />
					{!isFrozen && (
						<ItemActionBtn
							onClick={() => setIsEditable(!isEditable)}
							icon={<EditIcon color={PINK} />}
							disabled={isEditable}
						/>
					)}
				</div>
			</div>
		</div>
	);
}