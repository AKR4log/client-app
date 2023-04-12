import ImagesDetailProduct from '@/lib/components/ui/output/product/detail/DetailProduct';
import { IProduct } from '@/lib/types/product.interface';
import { formatToCurrency } from '@/lib/utils/format-to-currency';

const DetailProduct = ({
	id,
	name,
	description,
	images,
	user,
	price
}: IProduct) => {
	return (
		<div className='flex relative'>
			<ImagesDetailProduct images={images} />
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
		// </div>
	);
};

export default DetailProduct;
