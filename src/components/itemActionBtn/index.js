import styles from "./itemActionBtn.module.css";

export const ItemActionBtn = ({onClick, icon, disabled, ...props}) => {
	return (
		<div 
			onClick={onClick} 
			className={[styles.wrapper, disabled && styles.disabled].join(' ')} 
			{...props}
		>
			{icon || "icon"}
		</div>
	);
}