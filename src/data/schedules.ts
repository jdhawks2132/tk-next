import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Tea',
		field: '3',
		location: 'McKinnish Park',
		jersey: 'White',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/3/2026',
		time: '9:00 AM',
		isGame: true,
	},
	{
		id: 2,
		description: 'Bat Intentions',
		field: '2',
		location: 'McKinnish Park',
		jersey: 'White',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '5/3/2026',
		time: '10:00 AM',
		isGame: true,
	},
];
