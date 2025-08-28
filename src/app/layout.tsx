// src/app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
	title: 'Thunder Kitties',
	description: 'Schedules, maps, and contacts for the Dallas Thunder Kitties.',
};

export const viewport: Viewport = {
	themeColor: '#FFD60A',
	colorScheme: 'light',
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			data-theme='thunder-dark'
			className={`h-full ${inter.variable} ${oswald.variable}`}
			suppressHydrationWarning>
			<body
				className={`${inter.variable} min-h-screen bg-base-100 text-base-content antialiased flex flex-col`}>
				{/* DaisyUI Navbar */}
				<nav className='navbar border-b border-base-200 bg-base-100'>
					<div className='navbar-start'>
						<a
							className='btn btn-ghost normal-case text-xl font-extrabold'
							href='/'>
							Thunder Kitties
						</a>
					</div>
					<div className='navbar-center hidden lg:flex'>
						<ul className='menu menu-horizontal px-1'>
							<li>
								<a href='/#schedule'>Schedule</a>
							</li>
							<li>
								<a href='/#events'>Events</a>
							</li>
							<li>
								<a href='/#contact'>Contact</a>
							</li>
						</ul>
					</div>
					<div className='navbar-end'>
						<a
							className='btn btn-primary text-neutral'
							href='/#contact'>
							Join
						</a>
					</div>
				</nav>

				{/* Main Content */}
				<main
					id='main'
					className='flex-1 container mx-auto px-4 py-8'>
					{children}
				</main>

				{/* DaisyUI Footer */}
				<footer className='footer footer-center p-4 bg-base-200 text-base-content/70'>
					<aside>
						<p>© {new Date().getFullYear()} Thunder Kitties</p>
					</aside>
				</footer>
			</body>
		</html>
	);
}
