'use client'

import { IProduct } from '@/lib/types/product.interface';
import { formatToCurrency } from '@/lib/utils/format-to-currency';
import { useState } from 'react';

const DetailProduct = ({ name, description, images, price }: IProduct) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='flex relative'>
			<div className='shrink-0'>
				<div className='h-28 w-28 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
					<img
						src={images[currentIndex]}
						alt={images[currentIndex]}
						className='h-full w-full object-cover object-center'
					/>
				</div>
				{images?.length === 1 ? (
					<div></div>
				) : (
					<div className='grid grid-cols-4 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3 py-3'>
						{images?.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'
							>
								<img
									className='h-full w-full mx-3 object-cover object-center'
									src={slide}
									alt={slide}
								/>
							</div>
						))}
					</div>
				)}
			</div>
			<div className='w-full'>
				<div className='uppercase ml-4 tracking-wide text-xl text-indigo-500 font-semibold'>
					{name}
				</div>
				<p className='block mt-1 ml-4 text-lg leading-tight font-medium text-black hover:underline'>
					{formatToCurrency(price)}
				</p>
				<p className='mt-2 ml-4 text-slate-500'>{description}</p>
			</div>
		</div>
	);
};

export default DetailProduct;
