'use client';

import { useRef, useMemo, useCallback } from 'react';
import Image from 'next/image';
import type { CarouselItem } from '@/types/carousel';

export function Carousel({ items }: { items: CarouselItem[] }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const total = items.length;

	const ensureRef = useCallback((el: HTMLDivElement | null, i: number) => {
		slideRefs.current[i] = el;
	}, []);

	const goTo = useCallback((i: number) => {
		const el = slideRefs.current[i];
		if (el)
			el.scrollIntoView({
				behavior: 'smooth',
				inline: 'start',
				block: 'nearest',
			});
	}, []);

	const controls = useMemo(
		() =>
			items.map((_, i) => ({
				prev: i === 0 ? total - 1 : i - 1,
				next: i === total - 1 ? 0 : i + 1,
			})),
		[items, total]
	);

	return (
		<div
			ref={containerRef}
			className='carousel w-full rounded-xl border border-base-300 shadow-xl overflow-hidden'>
			{items.map((item, i) => (
				<div
					key={item.id}
					ref={(el) => ensureRef(el, i)}
					className='carousel-item relative w-full'>
					<div className='relative w-full aspect-[16/9]'>
						<Image
							src={item.src}
							alt={item.alt}
							fill
							className='object-cover'
							priority={i === 0}
							sizes='(min-width: 1024px) 960px, 100vw'
						/>
					</div>

					<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
						<button
							type='button'
							className='btn btn-circle'
							onClick={() => goTo(controls[i].prev)}
							aria-label='Previous slide'>
							❮
						</button>
						<button
							type='button'
							className='btn btn-circle'
							onClick={() => goTo(controls[i].next)}
							aria-label='Next slide'>
							❯
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
