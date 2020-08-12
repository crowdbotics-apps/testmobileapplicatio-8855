import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen29843Navigator from '../features/BlankScreen29843/navigator';
import BlankScreen19842Navigator from '../features/BlankScreen19842/navigator';
import BlankScreen09841Navigator from '../features/BlankScreen09841/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen29843: { screen: BlankScreen29843Navigator },
BlankScreen19842: { screen: BlankScreen19842Navigator },
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
