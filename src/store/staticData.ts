import moment from 'moment';
import { v4 } from 'react-native-uuid';

import { RootStore } from './types';

export const measurement: RootStore['measurements'] = {
	types: [
		{ name: 'bodyweight', title: 'Bodyweight', unite: 'kg', visible: true },
		{ name: 'shoulders', title: 'Shoulders', unite: 'cm', visible: true },
		{ name: 'chest', title: 'Chest', unite: 'cm', visible: true },
		{ name: 'waist', title: 'Waist', unite: 'cm', visible: true },
		{ name: 'hips', title: 'Hips', unite: 'cm', visible: true },
		{ name: 'neck', title: 'Neck', unite: 'cm', visible: true },
		{ name: 'upper_arm_right', title: 'Upper Arm (Right)', unite: 'cm', visible: false },
		{ name: 'upper_arm_left', title: 'Upper Arm (Left)', unite: 'cm', visible: false },
		{ name: 'forearm_right', title: 'Forearm (Right)', unite: 'cm', visible: false },
		{ name: 'forearm_left', title: 'Forearm (Left)', unite: 'cm', visible: false },
		{ name: 'thigh_right', title: 'Thigh (Right)', unite: 'cm', visible: false },
		{ name: 'thigh_left', title: 'Thigh (Left)', unite: 'cm', visible: false },
		{ name: 'calf_right', title: 'Calf (Right)', unite: 'cm', visible: false },
		{ name: 'calf_left', title: 'Calf (Left)', unite: 'cm', visible: false },
	],
	data: {
		bodyweight: [
			{ id: v4() as string, date: moment('2021-03-21', 'YYYY-MM-DD'), value: 88.4 },
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 89.4 },
			{ id: v4() as string, date: moment('2020-09-25', 'YYYY-MM-DD'), value: 89.4 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 90.1 },
			{ id: v4() as string, date: moment('2020-09-21', 'YYYY-MM-DD'), value: 89.5 },
			{ id: v4() as string, date: moment('2020-09-16', 'YYYY-MM-DD'), value: 89.1 },
			{ id: v4() as string, date: moment('2020-09-14', 'YYYY-MM-DD'), value: 88.6 },
			{ id: v4() as string, date: moment('2020-04-21', 'YYYY-MM-DD'), value: 86.4 },
			{ id: v4() as string, date: moment('2020-02-19', 'YYYY-MM-DD'), value: 91.5 },
			{ id: v4() as string, date: moment('2020-02-17', 'YYYY-MM-DD'), value: 91 },
			{ id: v4() as string, date: moment('2020-02-10', 'YYYY-MM-DD'), value: 90.9 },
			{ id: v4() as string, date: moment('2020-02-05', 'YYYY-MM-DD'), value: 91 },
			{ id: v4() as string, date: moment('2020-02-03', 'YYYY-MM-DD'), value: 91.4 },
			{ id: v4() as string, date: moment('2020-01-29', 'YYYY-MM-DD'), value: 89.9 },
		],
		shoulders: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 123 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 121 },
		],
		chest: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 112 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 114 },
		],
		waist: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 100.5 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 104 },
		],
		hips: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 110.5 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 112 },
		],
		neck: [{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 39 }],
		upper_arm_right: [],
		upper_arm_left: [],
		forearm_right: [],
		forearm_left: [],
		thigh_right: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 58.5 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 56 },
		],
		thigh_left: [
			{ id: v4() as string, date: moment('2021-01-20', 'YYYY-MM-DD'), value: 59 },
			{ id: v4() as string, date: moment('2020-09-22', 'YYYY-MM-DD'), value: 55.5 },
		],
		calf_right: [],
		calf_left: [],
	},
};
