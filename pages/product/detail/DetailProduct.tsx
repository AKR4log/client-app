'use client';

import AddCartAndPay from '@/lib/components/ui/actions/add-cart';
import { IProduct } from '@/lib/types/product.interface';
import { formatToCurrency } from '@/lib/utils/format-to-currency';
import { useState } from 'react';

const DetailProduct = ({
	id,
	name,
	description,
	images,
	price,
	user
}: IProduct) => {
	const [currentIndex, setCurrentIndex] = useState(0) || [0];
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col'>
			<div>
				<div className='h-[400px] sm:w-[400px] w-full flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
					<img
						src={images?.[currentIndex]}
						alt={images?.[currentIndex]}
						className='h-full w-full object-cover object-center'
					/>
				</div>
				{images?.length === 1 ? (
					<div></div>
				) : (
					<div className='grid grid-cols-4 gap-x-4 gap-y-6 py-3'>
						{images?.map((slide, slideIndex) => (
							<div
								key={slideIndex}
								onClick={() => goToSlide(slideIndex)}
								className='h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200'
							>
								<img
									className='h-full w-full object-cover object-center'
									src={slide}
									alt={slide}
								/>
							</div>
						))}
					</div>
				)}
			</div>
			<div className='basis-1/2 sm:w-auto ml-4'>
				<div className='uppercase tracking-wide text-2xl text-indigo-500 font-semibold'>
					{name}
				</div>
				<p className='block mt-1 text-xl leading-tight font-medium text-black'>
					{formatToCurrency(price)}
				</p>
				<p className='mt-2 text-slate-700'>{description}</p>
				<AddCartAndPay
					id={id}
					name={name}
					description={description}
					images={images}
					price={price}
					user={user}
				/>
			</div>
		</div>
	);
};

export default DetailProduct;
