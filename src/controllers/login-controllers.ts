import { helperNavigationReplace } from "@navigation/helper.navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  toggleDisabled,
  toggleLoading,
  updateFormLogin,
} from "@redux/slice/login.slice";
import { setUser, updateDetailUser } from "@redux/slice/user.slice";
import { fetchLoginUser, fetchPersonalData } from "src/api/auth.api";

export const handleChangeTextLogin = (
  value: string,
  key: string,
  dispatch: Function
) => {
  dispatch(updateFormLogin({ key, value }));
};

export const handlePressSignIn = async (
  dispatch: Function,
  data: { username: string; password: string },
  navigation: object
) => {
  dispatch(toggleLoading());
  dispatch(toggleDisabled());

  let responseLogin = await fetchLoginUser(data);

  if (responseLogin?.access_token) {
    let responseDetail = await fetchPersonalData(
      responseLogin.user.employee_id,
      responseLogin.access_token
    );

    if (responseDetail?.success) {
      dispatch(setUser(responseLogin));
      dispatch(updateDetailUser(responseDetail));

      dispatch(toggleLoading());
      dispatch(toggleDisabled());
      await AsyncStorage.setItem("user", JSON.stringify(responseLogin));
      await AsyncStorage.setItem("userDetail", JSON.stringify(responseDetail));
      helperNavigationReplace(navigation, "HomeStack");
    } else {
      dispatch(toggleLoading());
      dispatch(toggleDisabled());
    }
  } else {
    dispatch(toggleLoading());
    dispatch(toggleDisabled());
  }
};
