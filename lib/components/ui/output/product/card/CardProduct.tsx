'use client';

import { useActions } from '@/lib/hooks/useActions';
import { useTypedSelector } from '@/lib/hooks/useTypedSelector';
import { IProduct } from '@/lib/types/product.interface';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ShoppingBagIcon,
	TrashIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const CardProduct = ({
	id,
	price,
	images,
	user,
	description,
	name
}: IProduct) => {
	const { addToCart, changeQuantity, removeFromCart } = useActions();
	const items = useTypedSelector(state => state.cart.items);
	const itemExists = items.find(item => item.product.id === id);
	const product = { id, price, images, user, description, name };
	return (
		<div key={id} className='group relative shadow rounded-md p-2'>
			<Link href={`product/${product.id}`}>
				<div className='min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
					<img
						src={images[0]}
						alt={images[0]}
						className='h-full w-full object-cover object-center lg:h-full lg:w-full'
					/>
				</div>

				<div className='mt-2'>
					<div className='text-sm font-medium text-gray-700'>{product.name}</div>
					<div className='text-sm font-normal text-gray-600 text-ellipsis overflow-hidden max-h-16'>{product.description}</div>
				</div>
			</Link>
			<div className='pt-1.5 flex items-center justify-between'>
				<p className='text-base font-medium text-gray-900'>{price} рублей</p>
				<div className='flex items-center justify-center px-2'>
					{itemExists ? (
						<>
							{itemExists.quantity === 1 ? (
								<button
									className='bg-red-300 hover:bg-red-400 text-red-800 hover:text-white py-2 px-2 rounded-full '
									onClick={() => removeFromCart({ id: product.id })}
								>
									<TrashIcon className='h-4 w-4' aria-hidden='true' />
								</button>
							) : (
								<button
									className='bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-white py-2 px-2 rounded-full'
									onClick={() =>
										changeQuantity({ id: product.id, type: 'minus' })
									}
								>
									<ChevronLeftIcon className='h-4 w-4' aria-hidden='true' />
								</button>
							)}
							<button
								className='bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-white py-2 px-2 rounded-full ml-1'
								onClick={() => changeQuantity({ id: product.id, type: 'plus' })}
							>
								<ChevronRightIcon className='h-4 w-4' aria-hidden='true' />
							</button>
							<p className='text-base font-medium pl-2'>
								{itemExists.quantity}
							</p>
						</>
					) : (
						<button
							className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded-full'
							onClick={() =>
								addToCart({
									product,
									quantity: 1
								})
							}
						>
							<ShoppingBagIcon className='h-4 w-4' aria-hidden='true' />
						</button>
					)}
					{/* <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded-full ml-1'>
						<BookmarkIcon className='h-4 w-4' aria-hidden='true' />
					</button> */}
				</div>
			</div>
		</div>
	);
};
export default CardProduct;
