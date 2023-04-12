'use client';

import { IProduct } from '@/lib/types/product.interface';
import CardProduct from './card/CardProduct';

const OutputProduct = ({ products }: { products: IProduct[] }) => {
	return (
		<>
			<div className='my-7 flex items-stretch'>
				<p className='text-2xl font-bold text-gray-900'>
					Распрадажа
				</p>
				<p className='text-base font-semibold self-center bg-green-500 text-white ml-3 rounded-xl px-2 py-1 '>
					Сегодня
				</p>
			</div>
			<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 mb-7'>
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
