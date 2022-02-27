import React, { FC } from 'react'
import { IUser } from '../types/types'


interface UserListProps {
	users: IUser[]; //Массив типа IUser
}

export const UserList: FC<UserListProps> = ({ users }) => {

	return (
		<div>
			{
				users.map((user) => {
					return (
						<div key={user.id} style={{ padding: 15, border: "1px solid grey" }}>
							{user.id}. {user.name} проживает по адресу {user.address.city} по улице
							{user.address.street}
						</div>
					);

				})
			}
		</div>
	)
}
