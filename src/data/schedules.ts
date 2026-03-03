import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Homies',
		field: '1',
		location: 'McKinnish Park',
		jersey: 'Black',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/8/2026',
		time: '1:00 PM',
		isGame: true,
	},
	{
		id: 2,
		description: 'Bat Intentions',
		field: '1',
		location: 'McKinnish Park',
		jersey: 'Skyline',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '3/8/2026',
		time: '2:00 PM',
		isGame: true,
	},
];
