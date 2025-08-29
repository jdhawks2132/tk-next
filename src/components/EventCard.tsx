import type { EventItem } from '@/types/event';

export function EventCard({
	event,
	className = '',
}: {
	event: EventItem;
	className?: string;
}) {
	return (
		<article
			className={`card h-full bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition ${className}`}>
			<div className='card-body flex flex-col gap-2'>
				<h3 className='card-title text-lg font-semibold'>{event.title}</h3>

				<div className='flex flex-col gap-2 text-sm opacity-80'>
					<div className='flex flex-wrap items-center gap-2'>
						<span className='badge badge-ghost'>
							{event.date}
							{event.time ? ` • ${event.time}` : ''}
						</span>
					</div>
					<div className='flex flex-wrap items-center gap-2'>
						<span className='badge badge-outline'>{event.location}</span>
					</div>
				</div>

				{event.info?.length > 0 && (
					<ul className='space-y-1'>
						{event.info.map((line, i) => (
							<li
								key={i}
								className='flex items-start gap-2'>
								<span className='mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-primary' />
								<span className='opacity-90'>{line}</span>
							</li>
						))}
					</ul>
				)}

				<div className='card-actions justify-end mt-auto'>
					<a
						href={event.googleMapsLink}
						target='_blank'
						rel='noopener noreferrer'
						className='btn btn-secondary btn-sm'>
						Open in Maps
					</a>
				</div>
			</div>
		</article>
	);
}
