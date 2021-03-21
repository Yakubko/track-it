import { Root } from './types';

export * from './types';

export const measurement: Root['measurements'] = {
	types: [
		{ name: 'bodyweight', title: 'Bodyweight', unite: 'kg' },
		{ name: 'shoulders', title: 'Shoulders', unite: 'cm' },
		{ name: 'chest', title: 'Chest', unite: 'cm' },
		{ name: 'waist', title: 'Waist', unite: 'cm' },
		{ name: 'hips', title: 'Hips', unite: 'cm' },
		{ name: 'neck', title: 'Neck', unite: 'cm' },
		{ name: 'upper_arm_right', title: 'Upper Arm (Right)', unite: 'cm' },
		{ name: 'upper_arm_left', title: 'Upper Arm (Left)', unite: 'cm' },
		{ name: 'forearm_right', title: 'Forearm (Right)', unite: 'cm' },
		{ name: 'forearm_left', title: 'Forearm (Left)', unite: 'cm' },
		{ name: 'thigh_right', title: 'Thigh (Right)', unite: 'cm' },
		{ name: 'thigh_left', title: 'Thigh (Left)', unite: 'cm' },
		{ name: 'calf_right', title: 'Calf (Right)', unite: 'cm' },
		{ name: 'calf_left', title: 'Calf (Left)', unite: 'cm' },
	],
	data: {
		bodyweight: [
			{ id: 1, date: '2021-03-21', value: 88.4 },
			{ id: 2, date: '2021-01-20', value: 89.4 },
			{ id: 3, date: '2020-09-25', value: 89.4 },
			{ id: 4, date: '2020-09-22', value: 90.1 },
			{ id: 5, date: '2020-09-21', value: 89.5 },
			{ id: 6, date: '2020-09-16', value: 89.1 },
			{ id: 7, date: '2020-09-14', value: 88.6 },
			{ id: 8, date: '2020-04-21', value: 86.4 },
			{ id: 9, date: '2020-02-19', value: 91.5 },
			{ id: 10, date: '2020-02-17', value: 91 },
			{ id: 11, date: '2020-02-10', value: 90.9 },
			{ id: 12, date: '2020-02-05', value: 91 },
			{ id: 13, date: '2020-02-03', value: 91.4 },
			{ id: 14, date: '2020-01-29', value: 89.9 },
		],
		shoulders: [
			{ id: 1, date: '2021-01-20', value: 123 },
			{ id: 2, date: '2020-09-22', value: 121 },
		],
		chest: [
			{ id: 1, date: '2021-01-20', value: 112 },
			{ id: 2, date: '2020-09-22', value: 114 },
		],
		waist: [
			{ id: 1, date: '2021-01-20', value: 100.5 },
			{ id: 2, date: '2020-09-22', value: 104 },
		],
		hips: [
			{ id: 1, date: '2021-01-20', value: 110.5 },
			{ id: 2, date: '2020-09-22', value: 112 },
		],
		neck: [{ id: 1, date: '2020-09-22', value: 39 }],
		upper_arm_right: [],
		upper_arm_left: [],
		forearm_right: [],
		forearm_left: [],
		thigh_right: [
			{ id: 1, date: '2021-01-20', value: 58.5 },
			{ id: 2, date: '2020-09-22', value: 56 },
		],
		thigh_left: [
			{ id: 1, date: '2021-01-20', value: 59 },
			{ id: 2, date: '2020-09-22', value: 55.5 },
		],
		calf_right: [],
		calf_left: [],
	},
};
