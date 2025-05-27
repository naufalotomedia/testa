import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wrapper from "@screen/wrapper";
import { AuthStack } from "./auth.navigation";
import { HomeStack } from "./home.navigation";

const Stack = createNativeStackNavigator();

export const RootStack = ({ initialRoute }: any) => {
  return (
    <Wrapper>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </Wrapper>
  );
};
