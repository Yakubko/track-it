import { DefaultTheme } from '@react-navigation/native';

export const theme = {
	...DefaultTheme,
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: '#33333d',
		shadowColor: '#000000',
		card: '#373740',
		divider: '#424242',

		text: '#ffffff',
		primary: '#ffffff',
		success: '#007d51',
		success2: '#04b97f',
		warning: '#ffcf44',
		danger: '#b50000',

		// border: string;
		// notification: string;
	},
};
