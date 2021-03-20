import { NavigatorScreenParams } from '@react-navigation/core';

import { MeasurementsScreenList } from '../../screens/measurements/types';
import { ChallengesScreenList } from '../../screens/challenges/types';
import { DashboardScreenList } from '../../screens/dashboard/types';

export type DrawerScreenList = {
	Dashboard: NavigatorScreenParams<DashboardScreenList>;
	Measurements: NavigatorScreenParams<MeasurementsScreenList>;
	Challenges: NavigatorScreenParams<ChallengesScreenList>;
};
