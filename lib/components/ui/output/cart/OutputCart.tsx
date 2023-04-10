import { ICartItem } from '@/lib/types/cart.interface';
import CardProduct from '../product/card/CardProduct';

const OutputCart = ({items}: any) => {
	return (
		<div className='bg-white mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-3'>
			{items.map((product: ICartItem) => (
				<CardProduct key={product.product.id}
					id={product.product.id}
					price={product.product.price}
					user={product.product.user}
					name={product.product.name}
					images={product.product.images}
					description={product.product.description}
				/>
			))}
		</div>
	);
};

export default OutputCart;
