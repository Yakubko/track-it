import { MeasurementData } from '@constants/data';

interface MinMax {
	min: number;
	max: number;
}

export function getGridMinMax(data: MeasurementData[]): MinMax {
	const minMax: Partial<MinMax> = { min: undefined, max: undefined };
	for (const weight of data) {
		const formattedWeight = Math.max(Math.min(Math.round(weight.value), 150), 0);
		if (minMax.min === undefined) minMax.min = formattedWeight;
		if (minMax.max === undefined) minMax.max = formattedWeight;

		minMax.min = Math.min(minMax.min, formattedWeight);
		minMax.max = Math.max(minMax.max, formattedWeight);
	}
	minMax.min = Math.max((minMax.min ?? 0) - 4, 0);
	minMax.max = (minMax.max ?? 100) + 3;

	return { min: minMax.min, max: minMax.max };
}

export function fixTimelineGaps(data: MeasurementData[]): MeasurementData[] {
	const output = [...data];

	if (output.length === 1) {
		output.push(output[0]);
	} else if (output.length > 1) {
	}

	return output.reverse();
}
