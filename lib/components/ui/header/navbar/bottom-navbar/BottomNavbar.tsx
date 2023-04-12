import ItemBottomBar from "./ItemBottomBar";

const BottomNavbar = () => {
	return (
		<div className='h-10 items-center justify-between hidden lg:flex'>
			<ItemBottomBar name='B2B' id='' url='' />
			<ItemBottomBar name='Женщинам' id='' url='' />
			<ItemBottomBar name='Мужчинам' id='' url='' />
			<ItemBottomBar name='Детям' id='' url='' />
			<ItemBottomBar name='Скидки' id='' url='' />
			<ItemBottomBar name='Made in KG' id='' url='' />
			<ItemBottomBar name='Супермаркет' id='' url='' />
			<ItemBottomBar name='Дом и Мебель' id='' url='' />
			<ItemBottomBar name='Электроника' id='' url='' />
		</div>
	);
};
export default BottomNavbar;
