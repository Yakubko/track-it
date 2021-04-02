import React, { createContext, useContext, useState } from 'react';

import BottomSheet from '@design/BottomSheet';

import MeasurementForm from './Form';
import { MeasurementsContext, MeasurementValue, ProviderProps } from './types';

const MeasurementValueContext = createContext<MeasurementsContext>({ showMeasurement: () => {} });

export function MeasurementValueProvider({ children }: ProviderProps): React.ReactElement {
	const [measurementValue, setMeasurementValue] = useState<MeasurementValue>(null);

	return (
		<MeasurementValueContext.Provider value={{ showMeasurement: setMeasurementValue }}>
			{children}
			{measurementValue ? (
				<BottomSheet visible height={400} onClose={() => setMeasurementValue(null)}>
					<MeasurementForm object={measurementValue} />
				</BottomSheet>
			) : null}
		</MeasurementValueContext.Provider>
	);
}

export function useMeasurementValue() {
	return useContext(MeasurementValueContext);
}
