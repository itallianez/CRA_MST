export const AddIcon = ({color}) => {
	const stroke = color || '#000'
	return (
		<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
				fill="none"
				stroke={stroke}
				strokeMiterlimit="10"
				strokeWidth="32px"
			/>
			<line
				x1="256"
				y1="176"
				x2="256"
				y2="336"
				fill="none"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32px"
			/>
			<line
				x1="336"
				y1="256"
				x2="176"
				y2="256"
				fill="none"
				stroke={stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="32px"
			/>
		</svg>
	);
}