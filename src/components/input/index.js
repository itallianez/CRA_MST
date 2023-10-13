import styles from './input.module.css'

export const Input = ({ value, name, onChange, readOnly = false, className, placeholder }) => {
	return (
		<input
			value={value}
			name={name}
			placeholder={placeholder || ' '}
			onChange={onChange}
			readOnly={readOnly}
			className={[styles.input, className || ""].join(" ")}
		/>
	);
};