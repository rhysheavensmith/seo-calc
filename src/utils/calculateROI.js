export const calculateROI = ({
	searchVolume,
	ctr,
	conversionRate,
	averageOrderValue,
	lifetimeValue,
	closeRate, // optional: only for service-based
}) => {
	// Guard clause: if searchVolume is 0 (or less), return default values.
	if (searchVolume <= 0) {
		if (typeof closeRate !== 'undefined') {
			return {
				visitors: 0,
				leads: 0,
				conversions: 0,
				averageOrderValue,
				netRevenue: 0,
				totalLifetimeValue: 0,
				monthlyROI: 0,
			};
		} else {
			return {
				visitors: 0,
				conversions: 0,
				averageOrderValue,
				netRevenue: 0,
				totalLifetimeValue: 0,
				monthlyROI: 0,
			};
		}
	}

	// Continue with calculations if searchVolume is valid
	const visitors = Math.floor(searchVolume * (ctr / 100));

	if (typeof closeRate !== 'undefined') {
		// Service-Based SEO
		const leads = Math.floor(visitors * (conversionRate / 100));
		const conversions = Math.floor(leads * (closeRate / 100));
		const netRevenue = conversions * averageOrderValue;
		const totalLifetimeValue = conversions * lifetimeValue;
		const monthlyROI = netRevenue;
		return {
			visitors,
			leads,
			conversions,
			averageOrderValue,
			netRevenue,
			totalLifetimeValue,
			monthlyROI,
		};
	} else {
		// E-Commerce SEO
		const conversions = Math.floor(visitors * (conversionRate / 100));
		const netRevenue = conversions * averageOrderValue;
		const totalLifetimeValue = conversions * lifetimeValue;
		const monthlyROI = netRevenue;
		return {
			visitors,
			conversions,
			averageOrderValue,
			netRevenue,
			totalLifetimeValue,
			monthlyROI,
		};
	}
};
