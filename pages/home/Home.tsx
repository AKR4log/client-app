import OutputProduct from '@/lib/components/ui/output/product/OutputProduct';
import { IProduct } from '@/lib/types/product.interface';
import Image from 'next/image';

const HomePage = ({ products }: { products: IProduct[] }) => {
	return (
		<div className='bg-white mx-auto max-w-7xl sm:py-24'>
			<Image
				className='rounded-xl my-10'
				src='https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/banner/ac9c36ec-89cd-4f23-ab9a-e707ad2c000b.jpg'
				alt='banner'
				width={1420}
				height={245}
				quality={100}
				priority={true}
			/>
			<OutputProduct products={products} />
			<div className='flex justify-between mt-10'>
				<Image
					className='rounded-xl'
					src='https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/banner/fcb9cdf8-2419-4f6f-ad72-e5cc039eb638.jpg'
					alt='banner'
					width={640}
					height={180}
					quality={100}
					priority={true}
				/>
				<Image
					className='rounded-xl ml-2'
					src='https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/banner/797f581f-7a77-43eb-bcd3-2df916a29334.jpg'
					alt='banner'
					width={640}
					height={180}
					quality={100}
					priority={true}
				/>
			</div>
		</div>
	);
};

export default HomePage;
