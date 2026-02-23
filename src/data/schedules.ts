import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Pride E',
		field: '5',
		location: 'McKinnish Park',
		jersey: 'Skyline',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/1/2026',
		time: '10:30 AM',
		isGame: true,
	},
	{
		id: 2,
		description: '@ Vengeance E',
		field: '5',
		location: 'McKinnish Park',
		jersey: 'Skyline',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/1/2026',
		time: '12:30 PM',
		isGame: true,
	},
];
