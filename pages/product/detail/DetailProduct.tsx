'use client';

import { useActions } from '@/lib/hooks/useActions';
import { useTypedSelector } from '@/lib/hooks/useTypedSelector';
import { IProduct } from '@/lib/types/product.interface';
import { formatToCurrency } from '@/lib/utils/format-to-currency';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const DetailProduct = ({
	id,
	name,
	description,
	images,
	price,
	user
}: IProduct) => {
	const { addToCart, changeQuantity, removeFromCart } = useActions();
	const items = useTypedSelector(state => state.cart.items);
	const itemExists = items.find(item => item.product.id === id);
	const product = { id, price, images, user, description, name };
	const [currentIndex, setCurrentIndex] = useState(0) || [0];
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col'>
			<div>
				<div className='h-[400px] sm:w-[400px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
					<img
						src={images?.[currentIndex]}
						alt={images?.[currentIndex]}
						className='h-full w-full object-cover object-center'
					/>
				</div>
				{images?.length === 1 ? (
					<div></div>
				) : (
					<div className='grid grid-cols-4 gap-x-4 gap-y-6 py-3'>
						{images?.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200'
							>
								<img
									className='h-full w-full object-cover object-center'
									src={slide}
									alt={slide}
								/>
							</div>
						))}
					</div>
				)}
			</div>
			<div className='basis-1/2 sm:w-auto ml-4'>
				<div className='uppercase tracking-wide text-2xl text-indigo-500 font-semibold'>
					{name}
				</div>
				<p className='block mt-1 text-xl leading-tight font-medium text-black'>
					{formatToCurrency(price)}
				</p>
				<p className='mt-2 text-slate-700'>{description}</p>
				<div className='flex items-center justify-end pt-4 px-2'>
					{itemExists ? (
						<>
							{itemExists.quantity === 1 ? (
								<button
									className='bg-red-100 hover:bg-red-400 text-red-600 hover:text-white py-2 px-2 rounded-full '
									onClick={() => removeFromCart({ id: id })}
								>
									<TrashIcon className='h-5 w-5' aria-hidden='true' />
								</button>
							) : (
								<button
									className='bg-gray-100 hover:bg-gray-400 text-gray-800 hover:text-white py-2 px-2 rounded-full'
									onClick={() => changeQuantity({ id: id, type: 'minus' })}
								>
									<MinusIcon className='h-5 w-5' aria-hidden='true' />
								</button>
							)}
							<button
								className='bg-gray-100 hover:bg-gray-400 text-gray-800 hover:text-white py-2 px-2 rounded-full ml-1'
								onClick={() => changeQuantity({ id: id, type: 'plus' })}
							>
								<PlusIcon className='h-5 w-5' aria-hidden='true' />
							</button>
							<p className='text-xl font-medium pl-4'>
								{itemExists.quantity}
							</p>
						</>
					) : (
						<button
							className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full'
							onClick={() =>
								addToCart({
									product,
									quantity: 1
								})
							}
						>
							Добавить в корзину
						</button>
					)}
					<button className='bg-green-500 text-white font-semibold  py-2 px-4 border ml-6 rounded-full'>
						Купить сразу
					</button>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
