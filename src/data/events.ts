import type { EventItem } from '@/types/event';

export const events: EventItem[] = [
	{
		id: 1,
		title: 'Recruiting: Open Practice!',
		info: ['New Players Welcome', 'No Experience Necessary', 'Have Fun!'],
		location: 'TBD',
		googleMapsLink: 'https://maps.app.goo.gl/YVdCm4aL7QfuUPAC7',
		date: '12/7/2025',
		time: 'TBD',
	},
	{
		id: 2,
		title: 'Gasparilla Softball Tournament',
		info: [
			'February 13-16, 2026',
			'Tampa, FL',
			'Click "More Info" for details',
		],
		location: 'Tampa, FL',
		googleMapsLink: '',
		infoLink: 'https://www.suncoastsoftball.org/gsc',
		date: '2/13/2026 - 2/16/2026',
		time: 'All Day',
	},
];
