import React from 'react';
import './App.css';
import { Card, CardVariant } from './components/Card';
import { EventExample } from './components/EventExample';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UsersPage } from './components/UsersPage';
import { TodosPage } from './components/TodosPage';
import { UserItemPage } from './components/UserItemPage';
import { TodoItemPage } from './components/TodoItemPage';

export const App = () => {

	return (
		// <div>
		// 	<EventExample />
		// 	<Card
		// 		height='200px'
		// 		width='200px'
		// 		variant={CardVariant.outlined}
		// 		onClick={(num: number) => console.log("Button was clicked!", num)}
		// 	>
		// 		<button>Button</button>
		// 	</Card>
		// </div>
		<BrowserRouter>
			<div>
				<div
					style={{ margin: "10px 0 auto 10px", display: "flex", flexDirection: "column" }}>
					<Link to="/users">Пользователи</Link>
					<Link to="/todos">Список дел</Link>
				</div>
				<Routes>
					<Route path="/users" element={<UsersPage />} />

					<Route path="/todos" element={<TodosPage />} />
					<Route path="/users/:id" element={<UserItemPage />} />
					<Route path="/todos/:id" element={<TodoItemPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
