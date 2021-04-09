import { MeasurementData } from '@store/core';

interface MinMax {
	min: number;
	max: number;
}

export function getGridMinMax(data: MeasurementData[]): MinMax {
	const minMax: Partial<MinMax> = { min: undefined, max: undefined };
	for (const weight of data) {
		const formattedWeight = Math.max(Math.min(weight.value, 999), 0);
		if (minMax.min === undefined) minMax.min = formattedWeight;
		if (minMax.max === undefined) minMax.max = formattedWeight;

		minMax.min = Math.min(minMax.min, formattedWeight);
		minMax.max = Math.max(minMax.max, formattedWeight);
	}
	minMax.min = Math.max(minMax.min ?? 0, 0);
	minMax.max = minMax.max ?? 999;

	return { min: minMax.min, max: minMax.max };
}
