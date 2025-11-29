export type ScheduleItem = {
	id: number | string;
	description: string;
	field: string;
	location: string;
	jersey: string;
	googleMapsLink?: string;
	date: string;
	time: string;
	isGame: boolean;
	imageUrl?: string;
};
