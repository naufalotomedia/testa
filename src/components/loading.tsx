import { View, Text, SafeAreaView, ActivityIndicator } from "react-native";
import React from "react";
import TextComponents from "./text";
import { spacing } from "@utils/spacing";
import { colors } from "@utils/color";

export default function Loading() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
      }}
    >
      <ActivityIndicator color={colors.orange} size={"large"} />
      <View style={{ height: spacing.normal }} />
      <TextComponents
        text="Sedang memuat data"
        fontSize={13}
        color={colors.orange}
      />
    </SafeAreaView>
  );
}
