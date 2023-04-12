'use client';

import { ItemsCategoryBottomBar } from '@/lib/config/item-bottom-bar.config';
import { IItemBottomBar } from '@/lib/types/item-bottom-bar.interface';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

const ItemBottomBar = ({ name, url, id }: IItemBottomBar) => {
	return (
		<Popover className='ml-12'>
			<Popover.Button className='hover:text-gray-800 text-gray-500 text-sm font-medium'>
				<span>{name}</span>
			</Popover.Button>

			<Transition
				as={Fragment}
				enter='transition ease-out duration-200'
				enterFrom='opacity-0 translate-y-1'
				enterTo='opacity-100 translate-y-0'
				leave='transition ease-in duration-150'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 translate-y-1'
			>
				<Popover.Panel className='absolute z-10 flex w-screen max-w-max left-1/2 transform -translate-x-1/2 translate-y-4'>
					<div className='w-screen max-w-5xl flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5'>
						<div className='px-6 py-4 grid grid-cols-5 gap-3'>
							{ItemsCategoryBottomBar.map(category => (
								<div
									key={category.name}
								>
									<div>
										<p className='font-semibold text-gray-900 mb-1.5'>
											{category.name}
										</p>
										<div className='flex flex-col'>
											{category.subcategory.map(subcat => (
												<Link
													href={subcat.url}
													className='font-normal text-gray-600'
												>
													{subcat.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
							{/* {callsToAction.map(item => (
								<a
									key={item.name}
									href={item.href}
									className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
								>
									<item.icon
										className='h-5 w-5 flex-none text-gray-400'
										aria-hidden='true'
									/>
									{item.name}
								</a>
							))} */}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
export default ItemBottomBar;
