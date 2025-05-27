import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAppInitialization } from "@controllers/app-controllers";
import { Provider } from "react-redux";
import { store } from "@redux/store";
import Wrapper from "@screen/wrapper";
import { RootStack } from "@navigation/root.navigation";

export default function App() {
  const { appIsReady, onLayoutRootView, initialRoute } = useAppInitialization();

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Wrapper onLayoutRootView={onLayoutRootView}>
          <RootStack initialRoute={initialRoute} />
        </Wrapper>
      </NavigationContainer>
    </Provider>
  );
}
