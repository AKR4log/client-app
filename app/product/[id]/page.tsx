import { ProductService } from '@/lib/services/ProductService';
import DetailProduct from '@/pages/product/detail/DetailProduct';

const Product = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const { data } = await ProductService.byId(id);
	return (
		<main>
			<DetailProduct
				id={data.id}
				name={data.name}
				description={data.description}
				images={data.images}
				user={data.user}
				price={data.price}
			/>
		</main>
	);
};

export default Product;
