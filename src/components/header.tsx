import { Pressable, View, StyleSheet } from "react-native";
import React from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import TextComponents from "./text";
import { colors } from "@utils/color";
import { spacing } from "@utils/spacing";
import { Icons } from "@utils/icons";
import { getResponsiveSize } from "@utils/responsive";

interface HeaderComponentsProps {
  title: string;
  withBack?: boolean;
}

export default function HeaderComponents({
  title,
  withBack,
}: HeaderComponentsProps) {
  const navigation = useNavigation();

  const handlePressBack = () => {
    navigation.dispatch(StackActions.pop(1));
  };

  return (
    <View style={styles.header}>
      {withBack && (
        <Pressable onPress={handlePressBack} style={styles.backButton}>
          <Icons.back
            width={getResponsiveSize(25)}
            height={getResponsiveSize(25)}
          />
        </Pressable>
      )}

      <TextComponents
        text={title || ""}
        type="medium"
        fontSize={getResponsiveSize(17)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: getResponsiveSize(55),
    backgroundColor: colors.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: getResponsiveSize(spacing.normal),
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightgrey,
  },
  backButton: {
    position: "absolute",
    left: getResponsiveSize(spacing.normal),
    flexDirection: "row",
    alignItems: "center",
  },
});
