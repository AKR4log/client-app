'use client';

import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	MagnifyingGlassIcon,
	SquaresPlusIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const solutions = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: CursorArrowRaysIcon
	},
	{
		name: 'Security',
		description: "Your customers' data will be safe and secure",
		href: '#',
		icon: FingerPrintIcon
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: SquaresPlusIcon
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon
	}
];
const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon }
];

const NavbarHeader = () => {
	return (
		<>
			<Link
				href={'/'}
				className='ml-12 flex text-sm font-medium px-4 py-2 rounded-lg bg-green-400 text-white'
			>
				{' '}
				<Bars3Icon className='h-5 w-5 mr-2' />
				Каталог
			</Link>

			<div className='items-center px-4 justify-center hidden sm:block'>
				<div className='relative'>
					<div className='absolute top-2.5 left-3 items-center'>
						<MagnifyingGlassIcon
							className='h-5 w-5 text-green-800'
							aria-hidden='true'
						/>
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
