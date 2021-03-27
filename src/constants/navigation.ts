import { NavigatorScreenParams } from '@react-navigation/core';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { MeasurementType } from './data';

export type DashboardParamList = {
	Dashboard: undefined;
};
export type DashboardNavigationProp = StackScreenProps<DashboardParamList>;

export type ChallengesParamList = {
	Challenges: undefined;
};
export type ChallengesNavigationProp = StackScreenProps<ChallengesParamList>;

export type MeasurementsParamList = {
	Measurements: undefined;
	History: { headerTitle: string; measurementName: MeasurementType['name'] };
};
export type MeasurementsScreenProps<RouteName extends keyof MeasurementsParamList> = StackScreenProps<MeasurementsParamList, RouteName>;

export type RootParamList = {
	Dashboard: NavigatorScreenParams<DashboardParamList>;
	Measurements: NavigatorScreenParams<MeasurementsParamList>;
	Challenges: NavigatorScreenParams<ChallengesParamList>;
};
export type RootScreenProps = DrawerScreenProps<RootParamList>;
