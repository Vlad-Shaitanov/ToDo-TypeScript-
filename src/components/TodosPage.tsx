import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { IToDo } from '../types/types';
import List from './List';
import { TodoItem } from './TodoItem';

export const TodosPage: FC = () => {
	const [todos, setTodos] = useState<IToDo[]>([]);	//Список дел

	//Получаем список дел
	const fetchTodos = async () => {
		try {
			const response = await axios.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
			setTodos(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchTodos();

	}, []);

	return (
		<>
			<List
				items={todos}
				renderItem={(todo: IToDo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</>
	)
}
