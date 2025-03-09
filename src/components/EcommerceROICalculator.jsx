import ROICalculatorBase from './ROICalculatorBase';

/**
 * E-Commerce SEO Calculator (single conversion step).
 */
const EcommerceROICalculator = () => {
	const fieldConfig = [
		{
			name: 'searchVolume',
			label: 'Search Volume',
			min: '0',
			max: '1000000',
			step: '1',
			prefix: '',
			suffix: '',
			question:
				'How many searches do you get for business-relevant keywords? (per month)',
		},
		{
			name: 'ctr',
			label: 'CTR',
			min: '0',
			max: '100',
			step: '0.1',
			prefix: '',
			suffix: '%',
			question:
				'What percentage of the people that search for your keywords click on your website?',
		},
		{
			name: 'conversionRate',
			label: 'Conversion Rate',
			min: '0',
			max: '100',
			step: '0.1',
			prefix: '',
			suffix: '%',
			question:
				'Out of the visitors to your website, what percentage convert into customers?',
		},
		{
			name: 'averageOrderValue',
			label: 'Average Order Value',
			min: '0',
			max: '10000',
			step: '1',
			prefix: '$',
			suffix: '',
			question: 'What is your average order value?',
		},
		{
			name: 'lifetimeValue',
			label: 'Life Time Value',
			min: '0',
			max: '10000',
			step: '1',
			prefix: '$',
			suffix: '',
			question: 'What is the average lifetime value of your customer?',
		},
	];

	const initialInputs = {
		searchVolume: 0,
		ctr: 0,
		conversionRate: 0,
		averageOrderValue: 0,
		lifetimeValue: 0,
	};

	return (
		<ROICalculatorBase
			title='SEO ROI for E-Commerce'
			fieldConfig={fieldConfig}
			initialInputs={initialInputs}
		/>
	);
};

export default EcommerceROICalculator;
