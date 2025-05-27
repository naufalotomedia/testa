import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Wrapper from "@screen/wrapper";
import Login from "@screen/auth/login";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Wrapper>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </Wrapper>
  );
};
