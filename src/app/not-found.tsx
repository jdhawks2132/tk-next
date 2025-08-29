export default function NotFoundPage() {
	return (
		<main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-base-100 text-base-content'>
			{/* Paw-print background */}
			<div
				aria-hidden
				className='pointer-events-none absolute inset-0 opacity-[0.06]'>
				<svg
					className='absolute -left-16 -top-10 h-64 w-64 rotate-12'
					viewBox='0 0 100 100'
					fill='currentColor'>
					<Paw />
				</svg>
				<svg
					className='absolute right-6 top-24 h-40 w-40 -rotate-6'
					viewBox='0 0 100 100'
					fill='currentColor'>
					<Paw />
				</svg>
				<svg
					className='absolute left-12 bottom-10 h-52 w-52 rotate-45'
					viewBox='0 0 100 100'
					fill='currentColor'>
					<Paw />
				</svg>
			</div>

			{/* Card */}
			<div className='card z-10 w-full max-w-md border border-base-300 bg-base-200 p-10 text-center shadow-xl'>
				<div className='mb-2 text-7xl'>⚡️🐈</div>
				<h1 className='text-5xl font-extrabold'>
					<span className='text-primary'>404</span> — Meowt Found
				</h1>

				<p className='mt-4 opacity-80'>
					The page you’re chasing ran past the outfield. <br />
					Let’s pad back to safety.
				</p>

				{/* CTA */}
				<div className='card-actions mt-6 justify-center'>
					<a
						href='/'
						className='btn btn-primary'>
						Back to Home
					</a>
					<a
						href='/schedule'
						className='btn btn-ghost'>
						View Schedule
					</a>
				</div>

				{/* Tiny flavor line */}
				<div className='mt-4 text-xs opacity-60'>
					Tip: Bring treats. Thunder Kitties love ⚾ and snacks.
				</div>
			</div>
		</main>
	);
}

/** Small paw-print SVG path */
function Paw() {
	return (
		<g>
			<circle
				cx='30'
				cy='30'
				r='12'
			/>
			<circle
				cx='70'
				cy='30'
				r='12'
			/>
			<circle
				cx='25'
				cy='65'
				r='10'
			/>
			<circle
				cx='50'
				cy='75'
				r='14'
			/>
			<circle
				cx='75'
				cy='65'
				r='10'
			/>
		</g>
	);
}
