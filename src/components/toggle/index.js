import { Divider } from '../divider';
import styles from './toggle.module.css'

export const Toggle = ({checked = false, onChange, title, disabled}) => {
	
	return (
		<div className={disabled ? styles.disabled : ''}>
			{title && (
				<>
					<p
						className={[styles.title, checked && styles.title_disabled].join(
							" "
						)}>
						{title}
					</p>
					<Divider vertical={6} />
				</>
			)}
			<div
				className={[
					styles.toggle_wrapper,
					!checked && styles.toggle_wrapper_active,
				].join(" ")}
				onClick={onChange}>
				<div
					className={[styles.point, !checked && styles.point_active].join(" ")}
				/>
			</div>
		</div>
	);
}