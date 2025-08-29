import type { Metadata } from 'next';
import Link from 'next/link';
import { schedules } from '@/data/schedules';
import { ScheduleCard } from '@/components/ScheduleCard';
import { ScheduleTable } from '@/components/ScheduleTable';

export const metadata: Metadata = {
	title: 'Schedule — Thunder Kitties',
	description: 'Upcoming practices and games for the Dallas Thunder Kitties.',
};

export default function SchedulePage() {
	return (
		<div className='mx-auto max-w-6xl px-4 py-16'>
			<div className='mb-6 flex items-center justify-between'>
				<h1 className='text-4xl font-bold'>Schedule</h1>
				<Link
					href='/'
					className='btn btn-sm btn-ghost'>
					← Home
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
	);
}
