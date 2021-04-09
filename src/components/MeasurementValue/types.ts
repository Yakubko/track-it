import { MeasurementData, MeasurementType } from '@store/core';
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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type MeasurementFormObject = WithOptional<MeasurementData, 'id' | 'value'>;
