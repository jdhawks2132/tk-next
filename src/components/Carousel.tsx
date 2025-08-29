'use client';

import Image from 'next/image';
import type { CarouselItem } from '@/types/carousel';

export function Carousel({ items }: { items: CarouselItem[] }) {
	return (
		<div className='carousel w-full rounded-xl border border-base-300 shadow-xl overflow-hidden'>
			{items.map((item, i) => {
				const prev = i === 0 ? items.length - 1 : i - 1;
				const next = i === items.length - 1 ? 0 : i + 1;

				return (
					<div
						key={item.id}
						id={`slide${i}`}
						className='carousel-item relative w-full'>
						<div className='relative w-full aspect-[16/9]'>
							<Image
								src={item.src}
								alt={item.alt}
								fill
								className='object-cover'
								priority={i === 0}
							/>
						</div>

						{/* nav arrows */}
						<div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
							<a
								href={`#slide${prev}`}
								className='btn btn-circle'>
								❮
							</a>
							<a
								href={`#slide${next}`}
								className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}
