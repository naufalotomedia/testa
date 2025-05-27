import React from "react";
import { View, StyleSheet } from "react-native";
import TextComponents from "@components/text";
import { Icons } from "@utils/icons";
import { spacing } from "@utils/spacing";

export default function HeaderLogin() {
  return (
    <View style={styles.container}>
      <Icons.eiges width={110} height={110} />
      <TextComponents text="Welcome Back" type="medium" fontSize={18} />
      <TextComponents text="Enter your email and password to sign in" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.normal,
  },
});
