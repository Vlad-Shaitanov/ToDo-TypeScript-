import React, { FC } from 'react'
import { IUser } from '../types/types'
import { UserItem } from './UserItem';


interface UserListProps {
	users: IUser[]; //Массив типа IUser
}

// todo Неиспользуемый компонент

export const UserList: FC<UserListProps> = ({ users }) => {

	return (
		<div>
			{
				users.map((user) => {
					return (
						<UserItem onClick={(user: IUser) => console.log("UserList")} user={user} key={user.id} />
					);

				})
			}
		</div>
	)
}
