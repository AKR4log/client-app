import Image from 'next/image';
import ActionsHeader from './actions/ActionsHeader';
import NavbarHeader from './navbar/NavbarHeader';
import BottomNavbar from './navbar/bottom-navbar/BottomNavbar';

export default function Header() {
	return (
		<header className='relative bg-white'>
			<nav aria-label='Top' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='border-b border-gray-200'>
					<div className='flex h-16 items-center'>
						<div className='ml-4 flex lg:ml-0'>
							<a href='/'>
								<span className='sr-only'>Ookat</span>
								<Image
									className='h-8 w-auto'
									src='/logo-ookat.svg'
									alt='Logo Ookat.kg'
									width={100}
									height={20}
								/>
							</a>
						</div>
						<NavbarHeader />
						<ActionsHeader />
					</div>
				</div>
				<BottomNavbar />
			</nav>
		</header>
	);
}
