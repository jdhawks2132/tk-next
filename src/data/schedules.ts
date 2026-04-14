import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Vengeance',
		field: '1',
		location: 'McKinnish Park',
		jersey: 'Skyline',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/19/2026',
		time: '12:00 PM',
		isGame: true,
	},
	{
		id: 2,
		description: 'Pride',
		field: '4',
		location: 'McKinnish Park',
		jersey: 'Skyline',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '4/19/2026',
		time: '1:00 PM',
		isGame: true,
	},
];
