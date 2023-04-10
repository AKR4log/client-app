'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ActionsHeader from './actions/ActionsHeader';
import NavbarHeader from './navbar/NavbarHeader';
function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<div className='bg-white'>
			<header className='relative bg-white'>
				<nav
					aria-label='Top'
					className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
				>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							<div className='ml-4 flex lg:ml-0'>
								<a href='/'>
									<span className='sr-only'>Ookat</span>
									<Image
										className='h-8 w-auto'
										src='/logo-ookat.svg'
										alt='Logo Ookat.kg'
										width={100}
										height={20}
									/>
								</a>
							</div>
							<NavbarHeader />
							<ActionsHeader />
						</div>
					</div>
					<div className='flex h-10 items-center justify-between'>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Одежда и обувь
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Электроника
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Дом и сад
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Детские товары
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Бренды
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Продукты питания
						</Link>
						<Link
							className='hover:text-gray-800 text-gray-500 text-sm font-medium'
							href={'/'}
						>
							Станьте продавцом
						</Link>
					</div>
				</nav>
			</header>
		</div>
	);
}
