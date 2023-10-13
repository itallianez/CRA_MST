import styles from './button.module.css'

export const Button = ({title, onClick, main}) => {
	return (
		<div
			onClick={onClick}
			className={[styles.wrapper, main && styles.main].join(" ")}>
			<div className={[styles.title, main && styles.main_title].join(" ")}>
				{title}
			</div>
		</div>
	);
}