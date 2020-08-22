import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93131Navigator from '../features/Settings93131/navigator';
import UserProfile93124Navigator from '../features/UserProfile93124/navigator';
import Settings93123Navigator from '../features/Settings93123/navigator';
import Settings93121Navigator from '../features/Settings93121/navigator';
import SignIn293119Navigator from '../features/SignIn293119/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings93131: { screen: Settings93131Navigator },
UserProfile93124: { screen: UserProfile93124Navigator },
Settings93123: { screen: Settings93123Navigator },
Settings93121: { screen: Settings93121Navigator },
SignIn293119: { screen: SignIn293119Navigator },

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
