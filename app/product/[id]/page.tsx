import { ProductService } from '@/lib/services/ProductService';
import DetailProduct from '@/pages/product/detail/DetailProduct';

const Product = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const { data } = await ProductService.byId(id);
	return (
		<main>
			<div className='max-w-5xl mx-auto bg-white pt-6'>
				<DetailProduct
					id={data.id}
					name={data.name}
					description={data.description}
					images={data.images}
					user={data.user}
					price={data.price}
				/>
			</div>
		</main>
	);
};

export default Product;
