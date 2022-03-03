import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types';
import { useNavigate, useParams } from "react-router-dom";

interface UserItemPageParams {
	id: string;
}

export const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);//Массив пользователей

	const navigate = useNavigate();
	const params = useParams();

	//Получаем пользователей
	const fetchUser = async () => {
		try {

			const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id);
			setUser(response.data);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchUser();

	}, []);


	return (
		<div>
			<button onClick={() => navigate("/users")}>BACK</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>
				{user?.email}
			</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	)
}
