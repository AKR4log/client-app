'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import Image from 'next/image';
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
							<button
								type='button'
								className='rounded-md bg-white p-2 text-gray-400 lg:hidden'
								onClick={() => setOpen(true)}
							>
								<span className='sr-only'>Open menu</span>
								<Bars3Icon className='h-6 w-6' aria-hidden='true' />
							</button>

							<div className='ml-4 flex lg:ml-0'>
								<a href='/'>
									<span className='sr-only'>Ookat</span>
									<Image
										className='h-8 w-auto'
										src='/logo-ookat.svg'
										alt=''
										width={100}
										height={20}
									/>
								</a>
							</div>
							<NavbarHeader />
							<ActionsHeader />
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
