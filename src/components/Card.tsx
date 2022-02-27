import React, { FC, useState } from "react";

export enum CardVariant {
	outlined = "outlined",
	primary = "primary",
}

interface cardProps {
	//Св-ва, помеченные ? являются опциональными
	width?: string;
	height?: string;
	variant?: CardVariant;
	//Компонент сможет принимать функцию для обработки нажатия на кнопку
	onClick: (num: number) => void;
	// //У компонента могут быть вложенные элементы
	// children: React.ReactChild | React.ReactNode;
}

//Функциональный компонент типа cardProps
export const Card: FC<cardProps> = ({ width, height, children, variant, onClick }) => {
	const [state, setState] = useState(0);
	return (
		<div
			style={{
				width, height,
				border: variant === CardVariant.outlined ? "1px solid blue" : "none",
				background: variant === CardVariant.primary ? "lightgrey" : "lightgreen",
			}}
			onClick={() => onClick(state)}
		>
			{children}
		</div>
	)
}
