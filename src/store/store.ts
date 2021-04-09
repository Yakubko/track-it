import { createStore } from 'redux';

import { Actions, SET_TYPES, TOGGLE_VISIBILITY } from './actions';
import { RootStore } from './types';
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
	}

	return state;
};

const store = createStore(cartItemsReducer);

export default store;
