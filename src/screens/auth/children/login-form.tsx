import React from "react";
import { View, StyleSheet } from "react-native";
import TextInputComponents from "@components/text-input";
import ButtonComponents from "@components/button";

import { getResponsiveSize } from "@utils/responsive";
import { spacing } from "@utils/spacing";
import { colors } from "@utils/color";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  handleChangeTextLogin,
  handlePressSignIn,
} from "@controllers/login-controllers";

export default function FormLogin() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loginForm = useSelector((state: any) => state.login.loginForm);
  const loginUtils = useSelector((state: any) => state.login.loginUtils);
  const buttonState = useSelector((state: any) => state.login.buttonLogin);

  return (
    <>
      <View style={styles.formContainer}>
        <TextInputComponents
          textForm="Username"
          placeholder="Input your username"
          value={loginForm?.username}
          handleOnChangeText={(e: string) =>
            handleChangeTextLogin(e, "username", dispatch)
          }
        />
        <View style={styles.spacingSmall} />
        <TextInputComponents
          textForm="Password"
          placeholder="Input your password"
          value={loginForm?.password}
          secureTextEntry={loginUtils?.isPassword}
          handleOnChangeText={(e: string) =>
            handleChangeTextLogin(e, "password", dispatch)
          }
        />
      </View>

      <ButtonComponents
        onPress={() => handlePressSignIn(dispatch, loginForm, navigation)}
        backgroundColor={colors.orange}
        textButton="SIGN IN"
        textColor={colors.white}
        textType="medium"
        disabled={buttonState?.disabled}
        loading={buttonState?.loading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginBottom: getResponsiveSize(spacing.large),
  },
  spacingSmall: {
    height: getResponsiveSize(spacing.small),
  },
});
