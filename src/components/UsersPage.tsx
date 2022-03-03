import React, { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { IUser } from '../types/types';
import List from './List';
import { UserItem } from './UserItem';

export const UsersPage: FC = () => {
	const [users, setUsers] = useState<IUser[]>([]);//Массив пользователей	//Список дел

	const navigate = useNavigate();

	//Получаем пользователей
	const fetchUsers = async () => {
		try {

			const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
			setUsers(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchUsers();

	}, []);

	return (
		<>
			<List
				items={users}
				renderItem={
					(user: IUser) => <UserItem onClick={(user: IUser) => navigate("/users/" + user.id)}
						user={user}
						key={user.id} />
				}
			/>
		</>
	)
}
