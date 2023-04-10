import { IUser } from './user.interface';

export interface IProduct {
	id: string;
	name: string;
	price: number;
	description: string;
	images: string[];
	user: IUser;
}

export type sortType = 'newest' | 'oldest' | 'lot-to-high' | 'high-to-low';
