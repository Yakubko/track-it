export interface Root {
	measurements: {
		types: MeasurementType[];
		data: Record<MeasurementType['name'], MeasurementData[]>;
	};
}

export interface MeasurementType {
	name:
		| 'bodyweight'
		| 'shoulders'
		| 'chest'
		| 'waist'
		| 'hips'
		| 'neck'
		| 'upper_arm_right'
		| 'upper_arm_left'
		| 'forearm_right'
		| 'forearm_left'
		| 'thigh_right'
		| 'thigh_left'
		| 'calf_right'
		| 'calf_left';
	title: string;
	unite: 'cm' | 'kg';
}

export interface MeasurementData {
	id: number;
	date: string;
	value: number;
}
