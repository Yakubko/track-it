import React, { createContext, useContext, useState } from 'react';

import BottomSheet from '@design/BottomSheet';

import MeasurementForm from './Form';
import { MeasurementsContext, MeasurementValue, ProviderProps } from './types';

const MeasurementValueContext = createContext<MeasurementsContext>({ showMeasurement: () => {} });

export function MeasurementValueProvider({ children }: ProviderProps): React.ReactElement {
	const [measurementValue, setMeasurementValue] = useState<MeasurementValue>(null);
	const [snapTo, setSnapTo] = useState<number>(0);
	const heights = [400, 490];

	return (
		<MeasurementValueContext.Provider value={{ showMeasurement: setMeasurementValue }}>
			{children}
			{measurementValue ? (
				<BottomSheet
					snapTo={snapTo}
					heights={heights}
					onClose={() => {
						setSnapTo(0);
						setMeasurementValue(null);
					}}
				>
					<MeasurementForm object={measurementValue} setSnapTo={setSnapTo} />
				</BottomSheet>
			) : null}
		</MeasurementValueContext.Provider>
	);
}

export function useMeasurementValue() {
	return useContext(MeasurementValueContext);
}
