import type { ScheduleItem } from '@/types/schedule';

export const schedules: ScheduleItem[] = [
	{
		id: 1,
		description: 'Open Practice',
		field: 'TBD',
		location: 'TBD',
		jersey: 'NA',
		googleMapsLink: 'https://maps.app.goo.gl/YVdCm4aL7QfuUPAC7',
		imageUrl: '/images/churchill_park.jpeg',
		date: '12/7/2025',
		time: 'TBD',
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
