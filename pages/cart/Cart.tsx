import OutputCart from '@/lib/components/ui/output/cart/OutputCart';

const CartPage = ({ items }: any) => {
	return (
		<div className='bg-white mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8'>
			<OutputCart items={items} />
		</div>
	);
};
export default CartPage;
