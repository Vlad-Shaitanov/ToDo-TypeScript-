import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Card, CardVariant } from './components/Card';
import List from './components/List';
import { TodoItem } from './components/TodoItem';
import { UserItem } from './components/UserItem';
import { UserList } from './components/UserList';
import { IToDo, IUser } from './types/types';

function App() {

	const [users, setUsers] = useState<IUser[]>([]);//Массив пользователей
	const [todos, setTodos] = useState<IToDo[]>([]);	//Список дел

	//Получаем пользователей
	const fetchUsers = async () => {
		try {

			const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
			setUsers(response.data);
		} catch (e) {
			console.log(e);
		}
	};

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
		fetchUsers();
		fetchTodos();

	}, []);

	return (
		<div>
			<Card
				height='200px'
				width='200px'
				variant={CardVariant.outlined}
				onClick={(num: number) => console.log("Button was clicked!", num)}
			>
				<button>Button</button>
			</Card>
			{/* <UserList users={users} /> */}
			<List
				items={users}
				renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
			/>
			<List
				items={todos}
				renderItem={(todo: IToDo) => <TodoItem todo={todo} key={todo.id} />}
			/>
		</div>
	);
}

export default App;
