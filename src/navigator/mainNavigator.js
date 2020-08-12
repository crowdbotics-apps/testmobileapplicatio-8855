import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen09850Navigator from '../features/BlankScreen09850/navigator';
import BlankScreen39844Navigator from '../features/BlankScreen39844/navigator';
import BlankScreen09841Navigator from '../features/BlankScreen09841/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen09850: { screen: BlankScreen09850Navigator },
BlankScreen39844: { screen: BlankScreen39844Navigator },
BlankScreen09841: { screen: BlankScreen09841Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
