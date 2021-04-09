import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { theme } from '@constants/theme';
import { Typography, WheelSelect } from '@design/core';

interface Props {
	value: number;
	onSelect: (selectedValue: number) => void;
}

export default function Value({ value, onSelect }: Props): React.ReactElement {
	const didMountRef = useRef(false);
	const [measureValue, setMeasureValue] = useState(value > 0 ? Math.floor(value) : Math.ceil(value));
	const [measureDecimalValue, setMeasureDecimalValue] = useState(Math.floor((value % 1) * 10));

	const dataSourceA = Array.from({ length: 200 }, (_, i) => i + 1);
	const dataSourceB = Array.from({ length: 10 }, (_, i) => i);

	const currentValue = measureDecimalValue / 10 + measureValue;
	useEffect(() => {
		if (didMountRef.current) {
			onSelect(currentValue);
		} else {
			didMountRef.current = true;
		}
	}, [currentValue]);

	return (
		<View
			style={{
				flexDirection: 'row',
				height: 165,
				flex: 1,
			}}
		>
			<WheelSelect
				dataSource={dataSourceA}
				selected={measureValue}
				height={150}
				onChange={(value) => setMeasureValue(value)}
				renderItem={({ item, isSelected }): React.ReactElement => {
					return (
						<Typography
							fontFamily="eczar"
							bold={isSelected}
							style={{
								fontSize: 40,
								color: isSelected ? theme.colors.primary : theme.colors.grey,
								textAlign: 'right',
								width: 65,
							}}
						>
							{item}
						</Typography>
					);
				}}
			/>
			<Typography fontFamily="eczar" style={{ fontSize: 40, paddingTop: 50 }}>
				,
			</Typography>
			<WheelSelect
				dataSource={dataSourceB}
				height={150}
				selected={measureDecimalValue}
				onChange={(value) => setMeasureDecimalValue(value)}
				renderItem={({ item, isSelected }): React.ReactElement => {
					return (
						<Typography
							fontFamily="eczar"
							bold={isSelected}
							style={{ fontSize: 40, color: isSelected ? theme.colors.primary : theme.colors.grey }}
						>
							{item}
						</Typography>
					);
				}}
			/>
		</View>
	);
}
