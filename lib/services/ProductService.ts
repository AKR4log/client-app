import { axiosClassic } from '../api/api';
import { IProduct, sortType } from '../types/product.interface';

const PRODUCTS = '/product';

export const ProductService = {
	async getProducts(type?: sortType) {
		return await axiosClassic.get<IProduct[]>(PRODUCTS, {
			params: {
				sortType: type
			}
		});
	},

	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: {
				searchTerm
			}
		});
	},

	async byId(id: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`);
	}
};
