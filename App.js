import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  IconRegistry,
  Icon,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SearchScreen, SavedScreen } from "./screens";

const { Navigator, Screen } = createBottomTabNavigator();

const SearchIcon = (props) => <Icon {...props} name="search" />;

const SavedIcon = (props) => <Icon {...props} name="clipboard" />;

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab
      icon={SearchIcon}
      style={{ padding: 8 }}
      title="Search"
    />
    <BottomNavigationTab
      icon={SavedIcon}
      style={{ padding: 8 }}
      title="Saved"
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Search" component={SearchScreen} />
    <Screen name="Saved" component={SavedScreen} />
  </Navigator>
);

export default App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
