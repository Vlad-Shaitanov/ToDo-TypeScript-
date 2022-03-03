import React, { FC } from 'react'
import { IUser } from '../types/types'
import { UserItem } from './UserItem';


interface UserListProps {
	users: IUser[]; //Массив типа IUser
}

export const UserList: FC<UserListProps> = ({ users }) => {

	return (
		<div>
			{
				users.map((user) => {
					return (
						<UserItem user={user} key={user.id} />
					);

				})
			}
		</div>
	)
}
