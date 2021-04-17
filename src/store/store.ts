import { createStore } from 'redux';
import { v4 } from 'react-native-uuid';

import { Actions, ADD_MEASUREMENT_VALUE, DELETE_MEASUREMENT_VALUE, SET_TYPES, TOGGLE_VISIBILITY } from './actions';
import { MeasurementData, RootStore } from './types';
import { measurement } from './staticData';

const cartItemsReducer = (state: RootStore['measurements'] = measurement, action: Actions): RootStore['measurements'] => {
	switch (action.type) {
		case SET_TYPES: {
			return { ...state, types: action.payload };
		}

		case TOGGLE_VISIBILITY: {
			const types = state.types.map((item) => {
				if (item.name === action.payload) {
					return { ...item, visible: !item.visible };
				}

				return item;
			});

			return { ...state, types };
		}

		case ADD_MEASUREMENT_VALUE: {
			let object: MeasurementData | null = {
				...action.payload.data,
				id: action.payload.data.id ?? (v4() as string),
			};

			let newMeasurementData = [...state.data[action.payload.typeName]];
			if (newMeasurementData.length) {
				newMeasurementData = newMeasurementData.filter(
					(value) =>
						!(action.payload.data.id && value.id === action.payload.data.id) &&
						value.date.format('YYYY-MM-DD') !== action.payload.data.date.format('YYYY-MM-DD')
				);
			}

			newMeasurementData.push(object);
			newMeasurementData.sort((a, b) => -1 * a.date.diff(b.date));

			return {
				...state,
				data: {
					...state.data,
					[action.payload.typeName]: newMeasurementData,
				},
			};
		}

		case DELETE_MEASUREMENT_VALUE: {
			return {
				...state,
				data: {
					...state.data,
					[action.payload.typeName]: state.data[action.payload.typeName].filter((item) => item.id !== action.payload.id),
				},
			};
		}
	}

	return state;
};

const store = createStore(cartItemsReducer);

export default store;
