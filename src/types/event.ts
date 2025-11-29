export type EventItem = {
	id: number | string;
	title: string;
	info: string[];
	location: string;
	googleMapsLink?: string;
	infoLink?: string | null;
	date: string;
	time?: string;
	// imageUrl?: string;
};
