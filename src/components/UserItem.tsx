import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
};

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div
			style={{ padding: 15, border: "1px solid grey" }}
			onClick={() => { onClick(user) }}
		>
			{user.id}. {user.name} проживает по адресу {user.address.city} на
			улице {user.address.street}
		</div>
	)
}
