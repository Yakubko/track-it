import { MeasurementData, MeasurementType } from './types';

export const SET_TYPES = 'SET_TYPES' as const;
export interface SetTypes {
	type: typeof SET_TYPES;
	payload: MeasurementType[];
}
export function setTypes(payload: SetTypes['payload']): SetTypes {
	return { type: SET_TYPES, payload };
}

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY' as const;
export interface ToggleMeasurementVisibility {
	type: typeof TOGGLE_VISIBILITY;
	payload: MeasurementType['name'];
}
export function toggleMeasurementVisibility(typeName: ToggleMeasurementVisibility['payload']): ToggleMeasurementVisibility {
	return { type: TOGGLE_VISIBILITY, payload: typeName };
}

export const ADD_MEASUREMENT_VALUE = 'ADD_MEASUREMENT_VALUE' as const;
export interface AddMeasurementValue {
	type: typeof ADD_MEASUREMENT_VALUE;
	payload: {
		typeName: MeasurementType['name'];
		data: { id?: MeasurementData['id']; date: MeasurementData['date']; value: MeasurementData['value'] };
	};
}
export function addMeasurementValue(
	typeName: AddMeasurementValue['payload']['typeName'],
	data: AddMeasurementValue['payload']['data']
): AddMeasurementValue {
	return { type: ADD_MEASUREMENT_VALUE, payload: { typeName, data } };
}

export type Actions = SetTypes | ToggleMeasurementVisibility | AddMeasurementValue;
