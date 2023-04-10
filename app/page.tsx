import { ProductService } from '@/lib/services/ProductService';
import HomePage from '@/pages/home/Home';

export default async function Home() {
	const { data } = await ProductService.getProducts();
	return (
		<main>
			<HomePage products={data} />
		</main>
	);
}
