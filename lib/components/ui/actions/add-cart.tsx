import { useActions } from '@/lib/hooks/useActions';
import { useTypedSelector } from '@/lib/hooks/useTypedSelector';
import { IProduct } from '@/lib/types/product.interface';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const AddCartAndPay = ({ id, price, images, user, description, name }: IProduct) => {
	const { addToCart, changeQuantity, removeFromCart } = useActions();
	const items = useTypedSelector(state => state.cart.items);
	const itemExists = items.find(item => item.product.id === id);
	const product = { id, price, images, user, description, name };
	return (
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
					<p className='text-xl font-medium pl-4'>{itemExists.quantity}</p>
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
	);
};
export default AddCartAndPay;
