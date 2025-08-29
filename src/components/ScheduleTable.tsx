import type { ScheduleItem } from '@/types/schedule';
import Link from 'next/link';

export function ScheduleTable({ items }: { items: ScheduleItem[] }) {
	return (
		<div className='overflow-x-auto'>
			<table className='table rounded-box bg-base-200 border border-base-300'>
				<thead>
					<tr className='bg-base-300'>
						<th>Description</th>
						<th>Date &amp; Time</th>
						<th>Location</th>
						<th className='w-28'>Type</th>
					</tr>
				</thead>
				<tbody>
					{items.map((s) => (
						<tr
							key={s.id}
							className='hover'>
							<td>
								<Link
									href={`/schedule/${s.id}`}
									className='link link-primary no-underline hover:underline font-bold'>
									{s.description}
								</Link>
							</td>
							<td>
								{s.date} • {s.time}
								{s.jersey ? (
									<span className='opacity-60'> • Jersey: {s.jersey}</span>
								) : null}
							</td>
							<td>
								{s.location}
								{s.field ? `, Field ${s.field}` : ''}
							</td>
							<td>
								<div
									className={`badge ${
										s.isGame ? 'badge-error' : 'badge-success'
									}`}>
									{s.isGame ? 'Game' : 'Practice'}
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
