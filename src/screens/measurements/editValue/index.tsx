import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

import BottomSheet from '@components/BottomSheet';

import MeasurementForm from './Form';

interface Props {
	children: React.ReactNode;
}

interface ContextValue {
	name: string | null;
}

const initContextValue: ContextValue = { name: null };

const MeasurementFormContext = createContext<[ContextValue, Dispatch<SetStateAction<ContextValue>>]>([initContextValue, () => {}]);

export function MeasurementFormContextWrapper({ children }: Props): React.ReactElement {
	const [bottomSheetProps, setBottomSheetProps] = useState<ContextValue>(initContextValue);

	return (
		<MeasurementFormContext.Provider value={[bottomSheetProps, setBottomSheetProps]}>
			{children}
			<BottomSheet visible={!!bottomSheetProps.name} height={400} onClose={() => setBottomSheetProps((state) => ({ ...state, name: null }))}>
				<MeasurementForm name={bottomSheetProps.name} />
			</BottomSheet>
		</MeasurementFormContext.Provider>
	);
}

export function useMeasurementFormContext() {
	return useContext(MeasurementFormContext);
}
