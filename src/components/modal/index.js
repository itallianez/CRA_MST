import { observer } from "mobx-react-lite"
import useStore from "../../hooks/useStore"

import styles from './modal.module.css'
import { ItemActionBtn } from "../itemActionBtn"
import { CloseIcon } from "../../assets/icons"
import { PINK } from "../../const/colors"
import { Divider } from "../divider"

const Modal = ({content}) => {
	const {isModal, closeModal} = useStore()
	

	return (
		<>
			{isModal && (
				<div className={styles.modal_wrapper}>
					<div className={styles.modal_content_wrapper}>
						<div className={styles.top_panel}>
							<ItemActionBtn
								icon={<CloseIcon color={PINK} />}
								onClick={closeModal}
							/>
						</div>
						<Divider vertical={16} />
						{content}
					</div>
				</div>
			)}
		</>
	);
}

export default observer(Modal)