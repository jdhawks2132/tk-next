import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { schedules } from '@/data/schedules';

type Params = { id: string };

export function generateStaticParams() {
	return schedules.map((s) => ({ id: String(s.id) }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<Params>;
}): Promise<Metadata> {
	const { id } = await params;
	const s = schedules.find((x) => String(x.id) === id);
	if (!s) return { title: 'Schedule Item Not Found — Thunder Kitties' };

	return {
		title: `${s.description} — Thunder Kitties`,
		description: `${s.description} at ${s.location} • ${s.date}${
			s.time ? ` • ${s.time}` : ''
		}`,
	};
}

export default async function ScheduleDetailPage({
	params,
}: {
	params: Promise<Params>;
}) {
	const { id } = await params;

	const s = schedules.find((x) => String(x.id) === id);
	if (!s) notFound();

	const hasMapLink = Boolean(s.googleMapsLink);
	const mapHref = hasMapLink ? s.googleMapsLink : null;

	return (
		<div className='mx-auto max-w-6xl px-4 py-12'>
			<div className='mb-6 flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>{s.description}</h1>
				<div className='flex gap-2'>
					<Link
						href='/schedule'
						className='btn btn-sm btn-ghost'>
						← All Schedule
					</Link>
					<Link
						href='/'
						className='btn btn-sm btn-ghost'>
						Home
					</Link>
				</div>
			</div>

			<div className='bg-base-200 border border-base-300 rounded-xl shadow-xl overflow-hidden md:flex'>
				<div className='md:w-1/2'>
					{hasMapLink ? (
						<a
							href={mapHref!}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Open in Google Maps'>
							<div className='relative aspect-[4/3] w-full'>
								<Image
									src={s.imageUrl || '/images/tk_hero.jpg'}
									alt={s.description}
									fill
									className='object-cover'
								/>
							</div>
						</a>
					) : (
						<div className='relative aspect-[4/3] w-full'>
							<Image
								src={s.imageUrl || '/images/tk_hero.jpg'}
								alt={s.description}
								fill
								className='object-cover'
							/>
						</div>
					)}
				</div>

				<div className='md:w-1/2 p-6 lg:p-8 flex flex-col gap-4'>
					<div className='flex flex-wrap items-center gap-2'>
						<span
							className={`badge min-w-[5rem] font-bold ${
								s.isGame ? 'badge-error' : 'badge-success'
							}`}>
							{s.isGame ? 'Game' : 'Practice'}
						</span>
						<span className='badge badge-ghost'>
							{s.date}
							{s.time ? ` • ${s.time}` : ''}
						</span>
						{s.field ? (
							<span className='badge badge-outline'>Field {s.field}</span>
						) : null}
					</div>

					<div className='divider my-2' />

					<div className='space-y-2 opacity-90'>
						<p>
							<span className='font-semibold'>Location:</span> {s.location}
						</p>
						{s.field ? (
							<p>
								<span className='font-semibold'>Field:</span> {s.field}
							</p>
						) : null}
						<p>
							<span className='font-semibold'>Date:</span> {s.date}
						</p>
						{s.time ? (
							<p>
								<span className='font-semibold'>Time:</span> {s.time}
							</p>
						) : null}
						{s.jersey ? (
							<p>
								<span className='font-semibold'>Jersey:</span> {s.jersey}
							</p>
						) : null}
					</div>

					{s.isGame && (
						<div className='alert bg-base-100 border border-primary mt-2'>
							<span className='font-medium'>Game day:</span>
							<span> Please arrive 30 minutes early.</span>
						</div>
					)}

					<div className='mt-4 flex flex-wrap gap-2'>
						{hasMapLink && (
							<a
								href={mapHref!}
								target='_blank'
								rel='noopener noreferrer'
								className='btn btn-primary'>
								Google Maps
							</a>
						)}
						<Link
							href='/schedule'
							className='btn btn-secondary'>
							Back to Schedule
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
