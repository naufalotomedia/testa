import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Wrapper from "@screen/wrapper";
import TabBarComponent from "@components/tab-bar";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { userRecover } from "@controllers/app-controllers";
import DashboardScreen from "@screen/dashboard/dashboard";
import AbsensiScreen from "@screen/absensi/abssensi";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Test() {
  return <View></View>;
}

function BottomTabsInternal() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBarComponent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="AbsensiScreen" component={AbsensiScreen} />
      <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
      <Tab.Screen name="LainnyaScreen" component={Test} />
      <Tab.Screen name="AkunScreen" component={Test} />
    </Tab.Navigator>
  );
}

export const HomeStack = () => {
  const dispatch = useDispatch();
  const { userReady } = userRecover(dispatch);

  if (!userReady) {
    return null;
  }

  return (
    <Wrapper>
      <Stack.Navigator
        initialRouteName={"BottomTabsInternal"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="BottomTabsInternal"
          component={BottomTabsInternal}
        />
      </Stack.Navigator>
    </Wrapper>
  );
};
