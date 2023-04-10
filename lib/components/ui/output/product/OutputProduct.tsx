'use client';

import { IProduct } from '@/lib/types/product.interface';
import CardProduct from './card/CardProduct';

const OutputProduct = ({ products }: { products: IProduct[] }) => {
	return (
		<>
			<h2 className='text-2xl font-bold tracking-tight text-gray-900 mt-7'>
				Топ товары Электроники
			</h2>
			<div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 mb-7'>
				{products?.map((product: IProduct) => (
					<CardProduct
						key={product.id}
						id={product.id}
						price={product.price}
						user={product.user}
						name={product.name}
						images={product.images}
						description={product.description}
					/>
				))}
			</div>
		</>
	);
};

export default OutputProduct;
