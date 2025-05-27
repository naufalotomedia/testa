import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { colors } from "@utils/color";
import { spacing } from "@utils/spacing";

import HeaderLogin from "./children/login-header";
import FormLogin from "./children/login-form";
import Wrapper from "@screen/wrapper";

export default function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Wrapper style={styles.wrapper}>
        <HeaderLogin />
        <FormLogin />
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  wrapper: {
    justifyContent: "center",
    padding: spacing.large,
  },
});
