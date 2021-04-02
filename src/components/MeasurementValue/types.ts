import { MeasurementData, MeasurementType } from '@constants/data';
import { Dispatch, SetStateAction } from 'react';

interface MeasurementValueObject extends Partial<MeasurementData> {
	type: MeasurementType['name'];
}

export interface ProviderProps {
	children: React.ReactNode;
}

export type MeasurementValue = MeasurementValueObject | null;

export interface MeasurementsContext {
	showMeasurement: Dispatch<SetStateAction<MeasurementValue>>;
}
