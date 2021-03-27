import React from 'react';
import { Defs, LinearGradient, Stop } from 'react-native-svg';

interface Props {
	min: number;
	max: number;
}

export default function Gradient({ min, max }: Props): React.ReactElement {
	const stopOffset = 100 - (min / max) * 100;

	return (
		<Defs key={'gradient'}>
			<LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2={`${stopOffset}%`}>
				<Stop offset="0%" stopColor="#1EB980" stopOpacity={0.8} />
				<Stop offset="100%" stopColor="#045d56" stopOpacity={0.2} />
			</LinearGradient>
		</Defs>
	);
}
