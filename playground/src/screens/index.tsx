import React from 'react';
import { Navigation } from 'react-native-navigation';
import Screens from './Screens';

function registerScreens() {
  Navigation.registerComponent(Screens.Alert, () => require('./Alert').default);
  Navigation.registerComponent(
    Screens.CocktailDetailsScreen,
    () => require('./sharedElementTransition/CocktailDetailsScreen').default
  );
  Navigation.registerComponent(
    Screens.CocktailsListScreen,
    () => require('./sharedElementTransition/CocktailsListScreen').default
  );
  Navigation.registerComponent(
    Screens.CocktailsListMasterScreen,
    () => require('./splitView/CocktailsListMasterScreen').default
  );
  Navigation.registerComponent(
    Screens.EventsOverlay,
    () => require('./StaticLifecycleOverlay').default
  );
  Navigation.registerComponent(Screens.EventsScreen, () => require('./StaticEventsScreen').default);
  Navigation.registerComponent(
    Screens.ExternalComponent,
    () => require('./ExternalComponentScreen').default
  );
  Navigation.registerComponent(
    Screens.FirstBottomTabsScreen,
    () => require('./FirstBottomTabScreen').default
  );
  Navigation.registerComponent(Screens.FlatListScreen, () => require('./FlatListScreen').default);
  Navigation.registerComponent(Screens.Layouts, () => require('./LayoutsScreen').default);
  Navigation.registerComponent(Screens.Lifecycle, () => require('./LifecycleScreen').default);
  Navigation.registerComponent(Screens.Modal, () => require('./ModalScreen').default);
  Navigation.registerComponent(
    Screens.FullScreenModal,
    () => require('./FullScreenModalScreen').default
  );
  Navigation.registerComponent(Screens.Navigation, () => require('./NavigationScreen').default);
  Navigation.registerComponent(Screens.Options, () => require('./OptionsScreen').default);
  Navigation.registerComponent(Screens.Buttons, () => require('./ButtonsScreen').default);
  Navigation.registerComponent(Screens.Orientation, () => require('./OrientationScreen').default);
  Navigation.registerComponent(
    Screens.OrientationDetect,
    () => require('./OrientationDetectScreen').default
  );
  Navigation.registerComponent(Screens.Overlay, () => require('./OverlayScreen').default);
  Navigation.registerComponent(Screens.OverlayAlert, () => require('./OverlayAlert').default);
  Navigation.registerComponent(Screens.Pushed, () => require('./PushedScreen').default);
  Navigation.registerComponent(
    Screens.ScrollViewOverlay,
    () => require('./ScrollViewOverlay').default
  );
  Navigation.registerComponent(Screens.LifecycleButton, () => require('./LifecycleButton').default);
  Navigation.registerComponent(Screens.ReactTitleView, () => require('./CustomTopBar').default);
  Navigation.registerComponent(Screens.RoundButton, () => require('./RoundedButton').default);
  Navigation.registerComponent(
    Screens.ScrollViewScreen,
    () => require('./ScrollViewScreen').default
  );
  Navigation.registerComponent(
    Screens.ScrollViewOverlay,
    () => require('./ScrollViewOverlay').default
  );
  Navigation.registerComponent(
    Screens.SecondBottomTabsScreen,
    () => require('./SecondBottomTabScreen').default
  );
  Navigation.registerComponent(Screens.Search, () => require('./SearchScreen').default);
  Navigation.registerComponent(Screens.SetRoot, () => require('./SetRootScreen').default);
  Navigation.registerComponent(
    Screens.SideMenuCenter,
    () => require('./SideMenuCenterScreen').default
  );
  Navigation.registerComponent(Screens.SideMenuLeft, () => require('./SideMenuLeftScreen').default);
  Navigation.registerComponent(
    Screens.SideMenuRight,
    () => require('./SideMenuRightScreen').default
  );
  Navigation.registerComponent(Screens.Stack, () => require('./StackScreen').default);
  Navigation.registerComponent(
    Screens.StatusBarOptions,
    () => require('./StatusBarOptionsScreen').default
  );
  Navigation.registerComponent(
    Screens.StatusBarFirstTab,
    () => require('./StatusBarFirstTab').default
  );
  Navigation.registerComponent(
    Screens.TopBarBackground,
    () => require('../components/TopBarBackground').default
  );
  Navigation.registerComponent(Screens.Toast, () => require('./Toast').default);

  const { ContextProvider } = require('../context');
  const ContextScreen = require('./ContextScreen').default;
  Navigation.registerComponent(
    Screens.ContextScreen,
    () => (props) => (
      <ContextProvider>
        <ContextScreen {...props} />
      </ContextProvider>
    ),
    () => ContextScreen
  );

  Navigation.registerComponent(
    'navigation.playground.CustomDialogWithScroll',
    () => require('./complexlayouts/CustomDialogWithScroll').default
  );
  Navigation.registerComponent(
    'navigation.playground.TopTabScreen',
    () => require('./TopTabScreen').default
  );
  Navigation.registerComponent(
    'navigation.playground.TopTabOptionsScreen',
    () => require('./TopTabOptionsScreen').default
  );
  Navigation.registerComponent('CustomTextButton', () => require('./CustomTextButton').default);
  Navigation.registerComponent(
    'navigation.playground.KeyboardScreen',
    () => require('./KeyboardScreen').default
  );
  Navigation.setLazyComponentRegistrator((componentName) => {
    if (componentName === Screens.LazilyRegisteredScreen) {
      Navigation.registerComponent(
        Screens.LazilyRegisteredScreen,
        () => require('./LazilyRegisteredScreen').default
      );
    }
  });
}

export { registerScreens };
