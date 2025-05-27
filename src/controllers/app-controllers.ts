import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser, updateDetailUser } from "@redux/slice/user.slice";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

SplashScreen.preventAutoHideAsync();

export function useAppInitialization() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState("AuthStack");

  useEffect(() => {
    async function prepareApp() {
      try {
        TaskManager.unregisterAllTasksAsync();
        const user = await AsyncStorage.getItem("user");

        if (user) {
          setInitialRoute("HomeStack");
        } else {
          setInitialRoute("AuthStack");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        const { status: foregroundStatus } =
          await Location.requestForegroundPermissionsAsync();
        if (foregroundStatus === "granted") {
          const { status: backgroundStatus } =
            await Location.requestBackgroundPermissionsAsync();
          if (backgroundStatus === "granted") {
            setAppIsReady(true);
          }
        }
      }
    }

    prepareApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { appIsReady, onLayoutRootView, initialRoute };
}

export function userRecover(dispatch: Function) {
  const [userReady, setUserReady] = useState(false);

  useEffect(() => {
    async function prepareUser() {
      const user = await AsyncStorage.getItem("user");
      const userDetail = await AsyncStorage.getItem("userDetail");

      if (user && userDetail) {
        dispatch(setUser(JSON.parse(user)));
        dispatch(updateDetailUser(JSON.parse(userDetail)));
      }

      setUserReady(true);
    }

    prepareUser();
  }, []);

  return { userReady };
}
