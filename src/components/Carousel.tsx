'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import Image from 'next/image';
import type { CarouselItem } from '@/types/carousel';

export function Carousel({ items }: { items: CarouselItem[] }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const [active, setActive] = useState(0);

	const setSlideRef = useCallback((el: HTMLDivElement | null, i: number) => {
		slideRefs.current[i] = el;
	}, []);

	const scrollToIndex = useCallback((i: number) => {
		const container = containerRef.current;
		const el = slideRefs.current[i];
		if (!container || !el) return;
		const cbox = container.getBoundingClientRect();
		const ebox = el.getBoundingClientRect();
		const left = ebox.left - cbox.left + container.scrollLeft;
		container.scrollTo({ left, behavior: 'smooth' });
		setActive(i);
	}, []);

	// update active on manual swipe
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const onScroll = () => {
			// find slide whose center is closest to container center
			const mid = container.scrollLeft + container.clientWidth / 2;
			let best = 0;
			let bestDist = Infinity;
			slideRefs.current.forEach((el, i) => {
				if (!el) return;
				const left = el.offsetLeft + el.clientWidth / 2;
				const dist = Math.abs(left - mid);
				if (dist < bestDist) {
					bestDist = dist;
					best = i;
				}
			});
			setActive(best);
		};
		container.addEventListener('scroll', onScroll, { passive: true });
		return () => container.removeEventListener('scroll', onScroll);
	}, []);

	const prev = (i: number) => (i === 0 ? items.length - 1 : i - 1);
	const next = (i: number) => (i === items.length - 1 ? 0 : i + 1);

	return (
		<div className='w-full'>
			{/* SLIDES */}
			<div
				ref={containerRef}
				className='carousel w-full overflow-x-auto scroll-smooth rounded-xl border border-base-300 shadow-xl snap-x snap-mandatory'
				style={{ WebkitOverflowScrolling: 'touch' }}>
				{items.map((item, i) => (
					<div
						key={item.id}
						ref={(el) => setSlideRef(el, i)}
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

						{/* Desktop overlay arrows */}
						<div className='absolute left-4 right-4 top-1/2 hidden -translate-y-1/2 transform justify-between md:flex'>
							<button
								type='button'
								className='btn btn-circle btn-sm'
								onClick={() => scrollToIndex(prev(i))}
								aria-label='Previous slide'>
								❮
							</button>
							<button
								type='button'
								className='btn btn-circle btn-sm'
								onClick={() => scrollToIndex(next(i))}
								aria-label='Next slide'>
								❯
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Mobile control bar (underneath) */}
			<div className='mt-3 flex items-center justify-center gap-3 md:hidden'>
				<button
					type='button'
					className='btn btn-circle btn-xs'
					onClick={() => scrollToIndex(prev(active))}
					aria-label='Previous slide'>
					❮
				</button>

				{/* dots */}
				<div className='flex items-center gap-1.5'>
					{items.map((_, i) => (
						<button
							key={i}
							type='button'
							onClick={() => scrollToIndex(i)}
							className={`h-2 w-2 rounded-full transition ${
								i === active ? 'bg-primary' : 'bg-base-300'
							}`}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>

				<button
					type='button'
					className='btn btn-circle btn-xs'
					onClick={() => scrollToIndex(next(active))}
					aria-label='Next slide'>
					❯
				</button>
			</div>
		</div>
	);
}
