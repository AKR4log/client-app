import OutputProduct from '@/lib/components/ui/output/product/OutputProduct';
import { IProduct } from '@/lib/types/product.interface';
import Image from 'next/image';

const HomePage = ({ products }: { products: IProduct[] }) => {
	return (
		<div className='bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
			<Image
				className='rounded-xl my-10'
				src='https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/7b56ffd4-1165-4262-a774-3edc27708cc8.jpg'
				alt='banner'
				width={1420}
				height={245}
				quality={100}
				priority={true}
			/>
			<OutputProduct products={products} />
			<div className='w-full flex justify-between flex-row my-6'>
				<div className='lg:basis-2/3 w-full'>
					<div className='lg:flex hidden flex-col'>
						<div className='flex flex-row'>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/45a8e846-1c0c-47c2-9912-ca8c19a3383c.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/45a8e846-1c0c-47c2-9912-ca8c19a3383c.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl'
							/>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/110fc452-c8a1-45bc-80e8-06f4d7c99ddd.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/110fc452-c8a1-45bc-80e8-06f4d7c99ddd.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl mx-5'
							/>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/36da4947-0c3f-4e8f-9016-2071a19c1046.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/36da4947-0c3f-4e8f-9016-2071a19c1046.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl'
							/>
						</div>
						<div className='flex flex-row mt-8'>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/5a8936c4-acae-42c6-892c-63036c1210ed.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/5a8936c4-acae-42c6-892c-63036c1210ed.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl'
							/>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/fa3a847c-9ec2-4b21-9485-a9906844b57b.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/fa3a847c-9ec2-4b21-9485-a9906844b57b.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl mx-5'
							/>
							<img
								src={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/354f48f7-4f2f-4766-a246-cd0230a0c22d.jpg'
								}
								alt={
									'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/354f48f7-4f2f-4766-a246-cd0230a0c22d.jpg'
								}
								className='h-[140px] w-[300px] object-cover object-center rounded-3xl'
							/>
						</div>
					</div>
					<OutputProduct products={products} />
				</div>
				<div className='lg:flex hidden flex-col w-[340px]'>
					<img
						src={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/27df4af8-5710-49cf-8795-6ff68ddc80ce.jpg'
						}
						alt={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/27df4af8-5710-49cf-8795-6ff68ddc80ce.jpg'
						}
						className='h-full w-full object-cover object-center rounded-md'
					/>
					<img
						src={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/6d238133-ecad-475a-b5c9-1c1b10888e4c.jpg'
						}
						alt={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/6d238133-ecad-475a-b5c9-1c1b10888e4c.jpg'
						}
						className='h-full w-full object-cover object-center rounded-md my-5'
					/>
					<img
						src={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/27df4af8-5710-49cf-8795-6ff68ddc80ce.jpg'
						}
						alt={
							'https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/products/27df4af8-5710-49cf-8795-6ff68ddc80ce.jpg'
						}
						className='h-full w-full object-cover object-center rounded-md'
					/>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
