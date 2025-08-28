export type EventItem = {
	id: number | string;
	title: string;
	info: string[]; // bullet points
	location: string;
	googleMapsLink: string;
	date: string; // keep simple string for now (e.g., "5/7/23" or "Sunday April 27th")
	time?: string;
	// imageUrl?: string;     // legacy; not used in UI now
};
