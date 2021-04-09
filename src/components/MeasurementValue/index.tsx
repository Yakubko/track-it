import React, { createContext, useContext, useState } from 'react';

import { MeasurementsContext, MeasurementValue, ProviderProps } from './types';
import BottomSheet from './BottomSheet';

const MeasurementValueContext = createContext<MeasurementsContext>({ showMeasurement: () => {} });

export function MeasurementValueProvider({ children }: ProviderProps): React.ReactElement {
	const [measurementValue, setMeasurementValue] = useState<MeasurementValue>(null);

	return (
		<MeasurementValueContext.Provider value={{ showMeasurement: setMeasurementValue }}>
			{children}
			<BottomSheet measurementValue={measurementValue} setMeasurementValue={setMeasurementValue} />
		</MeasurementValueContext.Provider>
	);
}

export function useMeasurementValue() {
	return useContext(MeasurementValueContext);
}
