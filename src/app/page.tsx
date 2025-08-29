import Image from 'next/image';
import Link from 'next/link';
import { EventCard } from '@/components/EventCard';
import { ScheduleCard } from '@/components/ScheduleCard';
import { ScheduleTable } from '@/components/ScheduleTable';
import { events } from '@/data/events';
import { schedules } from '@/data/schedules';

export default function Page() {
	return (
		<div className='bg-base-100'>
			<section className='hero min-h-[78vh] border-b border-base-300 bg-grid'>
				<div className='hero-content grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-2'>
					<div className='space-y-6'>
						<div className='inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/50 px-3 py-1 text-xs'>
							<span>⚡</span>
							Thunder Kitties
						</div>

						<h1 className='text-5xl font-extrabold leading-tight'>
							Dallas Thunder Kitties
						</h1>

						<p className='opacity-80 text-lg max-w-prose'>
							Dallas team in the Pegasus Slow Pitch Softball League. Interested
							in joining or sponsoring? We’d love to hear from you.
						</p>

						<div className='flex flex-wrap gap-3'>
							<Link
								href='#contact'
								className='btn btn-primary'>
								Contact Us
							</Link>
							<Link
								href='#schedule'
								className='btn btn-ghost'>
								View Schedule
							</Link>
						</div>
					</div>

					<div className='overflow-hidden rounded-xl border border-base-300 shadow-xl'>
						<figure className='relative aspect-[4/3] w-full'>
							<Image
								src='/images/tk_hero.jpg'
								alt='Thunder Kitties Softball Team'
								fill
								className='object-cover'
								priority
							/>
						</figure>
					</div>
				</div>
			</section>

			<section
				id='about'
				className='py-16'>
				<div className='mx-auto max-w-6xl px-4 grid grid-cols-1 gap-8 lg:grid-cols-2'>
					<div className='card bg-base-200 border border-base-300 shadow-xl order-1 lg:order-none'>
						<div className='card-body gap-5'>
							<h2 className='text-3xl font-bold'>About Us</h2>

							<p className='opacity-90'>
								The Thunder Kitties compete in the E Division of the Pegasus
								Slow Pitch Softball League—an inclusive Dallas league.2019
								NAGAAA World Series silver medalists, returned in 2021 &amp;
								2023, and took silver at the 2025 Easter Classic. We're pumped
								to represent Dallas at GSWS Houston 2025.
							</p>

							<ul className='space-y-2'>
								{[
									'Welcoming new players of all experience levels',
									'Focused on growth, sportsmanship, and community',
									'Regular practices + league play + fundraisers',
								].map((line, i) => (
									<li
										key={i}
										className='flex items-start gap-2'>
										<span className='mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary' />
										<span className='opacity-90'>{line}</span>
									</li>
								))}
							</ul>

							<div className='stats bg-base-100 border border-base-300 hidden md:grid'>
								<div className='stat'>
									<div className='stat-title opacity-70'>League</div>
									<div className='stat-value text-xl'>PSSA</div>
								</div>
								<div className='stat'>
									<div className='stat-title opacity-70'>Division</div>
									<div className='stat-value text-xl'>E</div>
								</div>
								<div className='stat'>
									<div className='stat-title opacity-70'>Founded</div>
									<div className='stat-value text-xl'>2017</div>
								</div>
							</div>

							<div className='card-actions'>
								<Link
									href='#contact'
									className='btn btn-primary'>
									Get in Touch
								</Link>
								<Link
									href='#schedule'
									className='btn btn-ghost'>
									View Schedule
								</Link>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center'>
						<figure className='relative aspect-[4/3] w-full'>
							<Image
								src='/images/kitties_first_game_2025.jpg'
								alt='Thunder Kitties — first game of 2025'
								fill
								className='object-cover rounded-xl'
							/>
						</figure>
					</div>
				</div>
			</section>

			<section
				id='schedule'
				className='py-16'>
				<div className='mx-auto max-w-6xl px-4'>
					<div className='mb-6 flex items-center justify-between'>
						<h2 className='text-3xl font-bold'>Upcoming</h2>
						<Link
							href='/schedule'
							className='btn btn-sm btn-ghost'>
							Full Schedule →
						</Link>
					</div>

					<div className='grid gap-4 md:hidden'>
						{schedules.map((s) => (
							<ScheduleCard
								key={s.id}
								s={s}
							/>
						))}
					</div>

					<div className='hidden md:block'>
						<ScheduleTable items={schedules} />
					</div>
				</div>
			</section>

			<section
				id='events'
				className='py-16'>
				<div className='mx-auto max-w-6xl px-4'>
					<div className='mb-6 flex items-center justify-between'>
						<h2 className='text-3xl font-bold'>Our Events</h2>
						<Link
							href='/events'
							className='btn btn-sm btn-ghost'>
							View All →
						</Link>
					</div>

					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
						{events.slice(0, 3).map((event) => (
							<EventCard
								key={event.id}
								event={event}
							/>
						))}
					</div>
				</div>
			</section>

			<section
				id='contact'
				className='py-16'>
				<div className='mx-auto max-w-3xl px-4'>
					<h2 className='mb-10 text-center text-3xl font-bold'>Contact Us</h2>

					<div className='card bg-base-200 border border-base-300 shadow-xl'>
						<div className='card-body flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center'>
							<div className='avatar'>
								<div className='w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-200'>
									<Image
										src='/images/tk_hero.jpg'
										alt='Thunder Kitties Logo'
										width={256}
										height={256}
										className='object-cover'
									/>
								</div>
							</div>

							<div className='flex-1 space-y-6 text-center md:text-left'>
								<h3 className='text-2xl font-semibold'>Coach: John Blizzard</h3>

								<p className='opacity-80 max-w-md mx-auto md:mx-0'>
									Have questions about joining, sponsoring, or upcoming games?
									Reach out via Facebook or email — we’d love to hear from you.
								</p>

								<div className='flex flex-wrap justify-center md:justify-start gap-4'>
									<a
										href='https://www.facebook.com/DallasThunderKitties/'
										target='_blank'
										rel='noopener noreferrer'
										className='btn btn-secondary'>
										Facebook
									</a>
									<a
										href='mailto:thunder.kitties.e@gmail.com'
										className='btn btn-primary'>
										Email Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
