import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Scrimmage vs. Pride E',
		field: '3',
		location: 'McKinnish Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '2/21/2026',
		time: '10:00 AM - 12:00 PM',
		isGame: false,
	},
	{
		id: 2,
		description: 'Opening Day',
		field: 'TBA',
		location: 'McKinnish Park',
		jersey: 'TBD',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/1/2026',
		time: 'TBD',
		isGame: true,
	},
];
