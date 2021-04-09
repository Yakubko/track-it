import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import store from './store';

export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();
export const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useReduxSelector;
