import type { Metadata } from 'next';
import Link from 'next/link';
import { events } from '@/data/events';
import { EventCard } from '@/components/EventCard';

export const metadata: Metadata = {
	title: 'All Events — Thunder Kitties',
	description:
		'Fundraisers, socials, and team events for the Dallas Thunder Kitties.',
};

export default function EventsPage() {
	return (
		<div className='mx-auto max-w-6xl px-4 py-16'>
			<div className='mb-6 flex items-center justify-between'>
				<h1 className='text-4xl font-bold'>All Events</h1>
				<Link
					href='/'
					className='btn btn-sm btn-ghost'>
					← Home
				</Link>
			</div>

			<div className='mb-8 opacity-80'>
				Browse upcoming team fundraisers, socials, and league events. Locations
				link to Google Maps.
			</div>

			<div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3'>
				{events.map((e) => (
					<EventCard
						key={e.id}
						event={e}
						className='h-full'
					/>
				))}
			</div>
		</div>
	);
}
