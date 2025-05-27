import { colors } from "@utils/color";
import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Wrapper = ({ children, style, onLayoutRootView }: any) => {
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar backgroundColor={colors.black} />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Wrapper;
