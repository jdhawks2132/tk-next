import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Open Practice',
		field: '3',
		location: 'McKinnish Park',
		jersey: 'NA',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		imageUrl: '/images/mckinnish.jpg',
		date: '1/11/2026',
		time: '11:30 AM - 1:30 PM',
		isGame: false,
	},
	{
		id: 'gsc-2026',
		description: 'Gasparilla Softball Tournament',
		field: 'TBD',
		location: 'Tampa, FL',
		jersey: 'TBD',
		imageUrl: '/images/gsws2025.jpg',
		date: '2/13/2026 - 2/16/2026',
		time: 'All Day (schedule TBA)',
		isGame: true,
	},
];
