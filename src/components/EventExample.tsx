import React, { FC, useRef, useState } from 'react'

export const EventExample: FC = () => {
	//Состояние инпута
	const [value, setValue] = useState<string>("");

	//true если занесли в квадрат и false, если за его пределами
	const [isDrag, setIsDrag] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		/* HTMLInputElement это дженерик-тип, позволяющий отслеживать 
		событие только у инпута
		*/
		setValue(e.target.value);
	};

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		/* HTMLButtonElement это дженерик-тип, позволяющий отслеживать 
		событие только у кнопки
		*/

		// console.log(value); //Значение из управляемого инпута
		console.log(inputRef.current?.value); //Значение из неуправляемого инпута
	};

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log("DRAG");

	};

	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(true);
	};

	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
	};

	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setIsDrag(false);
		console.log("DROP");
	};

	return (
		<div>
			<input type="text" value={value} onChange={changeHandler} placeholder="Управляемый" />
			<input type="text" placeholder="Неуправляемый" ref={inputRef} />
			<button onClick={clickHandler}>Click me</button>
			<div
				draggable
				style={{ width: 200, height: 200, backgroundColor: "red" }}
				onDrag={dragHandler}
			>
			</div>
			<div
				style={{ width: 200, height: 200, backgroundColor: isDrag ? "purple" : "blue", marginTop: "20px" }}
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
			>
			</div>
		</div>
	);
}
