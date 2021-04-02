import React from 'react';

import { Typography, Divider } from '@design/core';

interface Props {
	title: string;
}

export default function Header({ title }: Props): React.ReactElement {
	return (
		<>
			<Typography variant="h1" bold style={{ paddingBottom: 5 }}>
				{title}
			</Typography>
			<Typography variant="body1" style={{ paddingBottom: 25 }}>
				Select date and chose a new value
			</Typography>
			<Divider />
		</>
	);
}
