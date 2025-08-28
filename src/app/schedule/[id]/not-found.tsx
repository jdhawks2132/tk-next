import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='mx-auto max-w-xl px-4 py-24 text-center'>
			<h1 className='text-3xl font-bold mb-4'>Schedule Item Not Found</h1>
			<p className='opacity-80 mb-8'>
				The game or practice you’re looking for doesn’t exist.
			</p>
			<Link
				href='/schedule'
				className='btn btn-primary'>
				Back to Schedule
			</Link>
		</div>
	);
}
