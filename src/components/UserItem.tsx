import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
	user: IUser
};

export const UserItem: FC<UserItemProps> = ({ user }) => {
	return (
		<div style={{ padding: 15, border: "1px solid grey" }}>
			{user.id}. {user.name} проживает по адресу {user.address.city} на
			улице {user.address.street}
		</div>
	)
}
