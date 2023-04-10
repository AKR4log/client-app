'use client';

import { IProduct } from '@/lib/types/product.interface';
import CardProduct from './card/CardProduct';

const OutputProduct = ({ products }: { products: IProduct[] }) => {
	return (
		<>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900 mt-6'>
				Топ товары Электроники
			</h2>
			<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3'>
				{products?.map((product: IProduct) => CardProduct(product))}
			</div>
		</>
	);
};

export default OutputProduct;
