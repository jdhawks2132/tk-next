import type { ScheduleItem } from '@/types/schedule';
import Link from 'next/link';
import Image from 'next/image';

export function ScheduleCard({ s }: { s: ScheduleItem }) {
	return (
		<article className='card bg-base-200 border border-base-300 shadow'>
			{/* If you want to drop images for schedule, delete the figure block */}
			<figure className='relative h-40 w-full'>
				<Image
					src={s.imageUrl!}
					alt={s.description}
					fill
					className='object-cover'
				/>
			</figure>

			<div className='card-body gap-3'>
				<div className='flex items-center justify-between'>
					<h3 className='card-title text-lg'>{s.description}</h3>
					<span
						className={`badge ${
							s.isGame ? 'badge-error' : 'badge-success'
						} badge-outline`}>
						{s.isGame ? 'Game' : 'Practice'}
					</span>
				</div>

				<p className='opacity-80 text-sm'>
					{s.date} • {s.time}
				</p>
				<p className='opacity-80 text-sm'>
					{s.location}
					{s.field ? ` (Field ${s.field})` : ''}
					{s.jersey ? ` • Jersey: ${s.jersey}` : ''}
				</p>

				<div className='card-actions justify-between'>
					<Link
						href={`/schedule/${s.id}`}
						className='btn btn-ghost btn-sm'>
						Details
					</Link>
					<a
						href={s.googleMapsLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-link text-primary no-underline'>
						📍 View Map
					</a>
				</div>
			</div>
		</article>
	);
}
