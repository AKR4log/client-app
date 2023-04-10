import OutputProduct from '@/lib/components/ui/output/product/OutputProduct';
import { IProduct } from '@/lib/types/product.interface';
import Image from 'next/image';

const HomePage = ({ products }: { products: IProduct[] }) => {
	return (
		<div className='bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8'>
			<Image
				className='rounded-md my-10'
				src='https://api.selcdn.ru/v1/SEL_222560/images/b0a965c1-68cd-431c-af92-6eec7324fbb8/banner/ac9c36ec-89cd-4f23-ab9a-e707ad2c000b.jpg'
				alt='banner'
				width={1420}
				height={245}
				quality={100}
				priority={true}
			/>
			<OutputProduct products={products} />
		</div>
	);
};

export default HomePage;
