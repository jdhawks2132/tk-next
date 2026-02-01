import type { EventItem } from '@/types/event';

export const events: EventItem[] = [
	{
		id: 1,
		title: 'Recruiting: Open Practice!',
		info: ['New Players Welcome', 'No Experience Necessary', 'Have Fun!'],
		location: 'McKinnish Park (Field 3)',
		googleMapsLink: 'https://maps.app.goo.gl/GZLfL5VE69kbSXdq9',
		date: '2/8/2026',
		time: '10:00 AM - 12:00 PM',
	},
	{
		id: 2,
		title: 'Gasparilla Tournament Registration Party',
		info: [
			'February 13, 2026',
			"Bradley's on 7th",
			'Click "More Info" for details',
		],
		location: "Bradley's on 7th",
		googleMapsLink: 'https://maps.app.goo.gl/PPZEc5apJXHrpAxHA',
		infoLink:
			'https://www.suncoastsoftball.org/page/show/7578760-opening-and-closing-parties',
		date: '2/13/2026',
		time: '6:00 PM - 9:00 PM',
	},
	{
		id: 3,
		title: 'Gasparilla Tournament Closing Party',
		info: [
			'February 15, 2026',
			"Bradley's on 7th",
			'Click "More Info" for details',
		],
		location: "Bradley's on 7th",
		googleMapsLink: 'https://maps.app.goo.gl/PPZEc5apJXHrpAxHA',
		infoLink:
			'https://www.suncoastsoftball.org/page/show/7578760-opening-and-closing-parties',
		date: '2/15/2026',
		time: '6:00 PM - 9:00 PM',
	},
];
