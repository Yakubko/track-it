import { DefaultTheme } from '@react-navigation/native';

export const theme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		primary: '#ffffff',
		background: '#33333d',
		card: '#373740',

		// primary: string;
		// background: string;
		// card: string;
		// text: string;
		// border: string;
		// notification: string;
	},
};
