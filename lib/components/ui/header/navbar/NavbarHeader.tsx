import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


const NavbarHeader = () => {
	return (
		<>
			<Link href={'/catalog'} className='ml-12 mr-5'>
				<p className='text-sm font-medium text-gray-700 hover:text-gray-800'>
					Каталог
				</p>
			</Link>
			<div className='items-center px-4 flex justify-center'>
				<div className='relative mr-3'>
					<div className='absolute top-2.5 left-3 items-center'>
						<MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true'  />
					</div>
					<input
						type='text'
						className='block p-1.5 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
						placeholder='Поиск в Ookat.kg'
					/>
				</div>
			</div>
		</>
	);
};
export default NavbarHeader;
