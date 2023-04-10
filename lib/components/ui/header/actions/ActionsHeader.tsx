import { useTypedSelector } from '@/lib/hooks/useTypedSelector';
import {
    ShoppingBagIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const ActionsHeader = () => {
	const items = useTypedSelector(state => state.cart.items);

	return (
		<div className='ml-auto flex items-center'>
			<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
				<a
					href='#'
					className='text-sm font-medium text-gray-700 hover:text-gray-800'
				>
					Войти
				</a>
				<span className='h-6 w-px bg-gray-200' aria-hidden='true' />
				<a
					href='#'
					className='text-sm font-medium text-gray-700 hover:text-gray-800'
				>
					Создать аккаунт
				</a>
			</div>
			<div className='ml-4 flow-root lg:ml-6'>
				<Link href={'cart'} className='group -m-2 flex items-center p-2'>
					<ShoppingBagIcon
						className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
						aria-hidden='true'
					/>
					<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
						{items.length}
					</span>
					<span className='sr-only'>items in cart, view bag</span>
				</Link>
			</div>
		</div>
	);
};
export default ActionsHeader;
