import { useTypedSelector } from '@/lib/hooks/useTypedSelector';
import CartPage from '@/pages/cart/Cart';

export default function Cart() {
	const items = useTypedSelector(state => state.cart.items);
	return (
		<main>
			<CartPage items={items} />
		</main>
	);
}
