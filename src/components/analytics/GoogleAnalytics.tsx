'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type GoogleAnalyticsProps = {
	gaId: string;
};

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		if (!gaId || typeof window === 'undefined') return;

		const query = searchParams?.toString();
		const url = query ? `${pathname}?${query}` : pathname;

		if (typeof window.gtag !== 'function') return;
		window.gtag('config', gaId, { page_path: url });
	}, [gaId, pathname, searchParams]);

	return null;
}
