import { observer } from "mobx-react-lite";
import { ItemActionBtn, UserCard } from "../../components";
import useStore from "../../hooks/useStore";

import styles from './usersScreen.module.css'
import { AddIcon } from "../../assets/icons";

import { MAIN_TEXT } from "../../const/colors";

const UsersScreen = () => {
	const { users, openModal } = useStore();

	return (
		<div className={styles.page_wrapper}>
			<div className={styles.content_wrapper}>
				<div className={styles.top_panel_wrapper}>
					<p className={styles.panel_title}>Users List</p>
					<ItemActionBtn
						icon={<AddIcon color={MAIN_TEXT} />}
						onClick={openModal}
					/>
				</div>
				<div className={styles.user_list_wrapper}>
					{users?.length > 0 
					? users.map(item => (
						<UserCard key={item.id} {...item} />
					))
					: (<p className={styles.empty_list}>Ops, users list is empty. Please, create new user</p>)
					}
				</div>
			</div>
		</div>
	);
};

export default observer(UsersScreen);
