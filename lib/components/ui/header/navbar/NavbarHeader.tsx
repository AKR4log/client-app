import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const NavbarHeader = () => {
	return (
		<>
			<Link href={'/catalog'} className='ml-12'>
				<p className='text-sm font-medium px-4 py-2 rounded-lg bg-green-400 text-white'>
					Каталог
				</p>
			</Link>
			<div className='items-center px-4 flex justify-center'>
				<div className='relative'>
					<div className='absolute top-2.5 left-3 items-center'>
						<MagnifyingGlassIcon className='h-5 w-5 text-green-800' aria-hidden='true' />
					</div>
					<input
						type='text'
						className='block p-1.5 pl-10 w-70 text-gray-600 bg-gray-50 rounded-lg border border-green-300'
						placeholder='Поиск в Ookat.kg'
					/>
				</div>
			</div>
		</>
	);
};
export default NavbarHeader;
