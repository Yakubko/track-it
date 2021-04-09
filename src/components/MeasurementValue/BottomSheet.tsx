import React, { Dispatch, SetStateAction, useState } from 'react';
import moment from 'moment';

import { BottomSheet as BottomSheetDesign, Divider, Typography } from '@design/core';
import { useSelector, useDispatch, addMeasurementValue } from '@store/core';

import { MeasurementValue, MeasurementFormObject } from './types';
import MeasurementForm from './Form';
import { View } from 'react-native';

interface Props {
	measurementValue: MeasurementValue;
	setMeasurementValue: Dispatch<SetStateAction<MeasurementValue>>;
}

export default function BottomSheet({ measurementValue, setMeasurementValue }: Props): React.ReactElement {
	const dispatch = useDispatch();
	const types = useSelector((state) => state.types);

	const [snapTo, setSnapTo] = useState<number>(0);
	const typeObject = types.find((item) => item.name === measurementValue?.type);
	const heights = [400, 490];

	if (!measurementValue) return <></>;
	if (!typeObject) return <Typography>Error unknown type {measurementValue.type}</Typography>;

	const object: MeasurementFormObject = {
		id: measurementValue.id,
		date: measurementValue.date ?? moment(),
		value: measurementValue.value ?? 0,
	};

	const handleSave = (newValue: MeasurementFormObject) => {
		dispatch(addMeasurementValue(typeObject.name, newValue));
		setMeasurementValue(null);
	};

	const handleDelete = (value: MeasurementFormObject) => {
		console.log(value);
	};

	const renderHeader = (): React.ReactElement => {
		return (
			<View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}>
				<Typography variant="h1" bold style={{ paddingBottom: 5 }}>
					{typeObject.title}
				</Typography>
				<Typography variant="body1" style={{ paddingBottom: 15 }}>
					Select date and chose a new value
				</Typography>
				<Divider />
			</View>
		);
	};

	return (
		<BottomSheetDesign
			snapTo={snapTo}
			heights={heights}
			onClose={() => {
				setSnapTo(0);
				setMeasurementValue(null);
			}}
			header={renderHeader}
		>
			<MeasurementForm type={typeObject} object={object} setSnapTo={setSnapTo} onSave={handleSave} onDelete={handleDelete} />
		</BottomSheetDesign>
	);
}
