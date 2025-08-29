'use client';

import { useRef, useCallback } from 'react';
import Image from 'next/image';
import type { CarouselItem } from '@/types/carousel';

export function Carousel({ items }: { items: CarouselItem[] }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

	const setSlideRef = useCallback((el: HTMLDivElement | null, i: number) => {
		slideRefs.current[i] = el;
	}, []);

	const scrollToIndex = useCallback((i: number) => {
		const container = containerRef.current;
		const el = slideRefs.current[i];
		if (!container || !el) return;

		// Compute left offset relative to the container (works reliably on mobile)
		const cbox = container.getBoundingClientRect();
		const ebox = el.getBoundingClientRect();
		const left = ebox.left - cbox.left + container.scrollLeft;

		container.scrollTo({ left, behavior: 'smooth' });
	}, []);

	return (
		<div
			ref={containerRef}
			// Ensure the container itself scrolls horizontally on touch
			className='carousel w-full overflow-x-auto scroll-smooth rounded-xl border border-base-300 shadow-xl
                 snap-x snap-mandatory'
			// optional: improve iOS momentum scrolling
			style={{ WebkitOverflowScrolling: 'touch' }}>
			{items.map((item, i) => {
				const prev = i === 0 ? items.length - 1 : i - 1;
				const next = i === items.length - 1 ? 0 : i + 1;

				return (
					<div
						key={item.id}
						ref={(el) => setSlideRef(el, i)}
						// Important bits:
						// - flex-none so slides don’t shrink
						// - w-full so each slide takes full viewport width
						// - snap-center for buttery paging on mobile
						className='carousel-item relative w-full flex-none snap-center'>
						<div className='relative w-full aspect-[16/9]'>
							<Image
								src={item.src}
								alt={item.alt}
								fill
								className='object-cover'
								priority={i === 0}
								sizes='100vw'
							/>
						</div>

						{/* arrows as buttons so there’s no hash jump */}
						<div className='absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between'>
							<button
								type='button'
								className='btn btn-circle'
								onClick={() => scrollToIndex(prev)}
								aria-label='Previous slide'>
								❮
							</button>
							<button
								type='button'
								className='btn btn-circle'
								onClick={() => scrollToIndex(next)}
								aria-label='Next slide'>
								❯
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
