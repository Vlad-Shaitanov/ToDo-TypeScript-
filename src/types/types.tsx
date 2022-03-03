export interface IAddress {
	street: string;
	city: string;
	zipcode: string;
}

//Интерфейс конкретного пользователя
export interface IUser {
	id: number;
	name: string;
	email: string;
	address: IAddress;
}

//Интерфейс для элемента списка дел
export interface IToDo {
	id: number;
	title: string;
	completed: boolean;
}