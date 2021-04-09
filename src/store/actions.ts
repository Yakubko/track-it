import { MeasurementType } from './types';

export const SET_TYPES = 'SET_TYPES' as const;

export interface SetTypes {
	type: typeof SET_TYPES;
	payload: MeasurementType[];
}
export function setTypes(payload: SetTypes['payload']): SetTypes {
	return { type: SET_TYPES, payload };
}

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY' as const;

export interface ToggleVisibility {
	type: typeof TOGGLE_VISIBILITY;
	payload: MeasurementType['name'];
}
export function toggleVisibility(typeName: ToggleVisibility['payload']): ToggleVisibility {
	return { type: TOGGLE_VISIBILITY, payload: typeName };
}

export type Actions = SetTypes | ToggleVisibility;
