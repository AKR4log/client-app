'use client';

import { useState } from 'react';

const ImagesDetailProduct = ({ images }: { images: string[] }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToSlide = (slideIndex: number) => {
		setCurrentIndex(slideIndex);
	};
	return (
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
	);
};
export default ImagesDetailProduct;
