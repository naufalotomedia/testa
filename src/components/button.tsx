import { ActivityIndicator, Pressable, View } from "react-native";
import React from "react";
import { colors } from "@utils/color";
import { getResponsiveSize } from "@utils/responsive";
import { spacing } from "@utils/spacing";
import TextComponents from "./text";

interface ButtonComponentsProps {
  onPress?: () => void;
  textButton?: string;
  backgroundColor?: string;
  textColor?: string;
  textType?: string;
  disabled?: boolean;
  loading?: boolean;
  height?: number;
}

export default function ButtonComponents({
  onPress,
  textButton,
  backgroundColor,
  textColor,
  textType,
  disabled,
  loading,
  height,
}: ButtonComponentsProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        flex: height ? 1 : 0,
        height: height ? getResponsiveSize(height) : getResponsiveSize(50),
        backgroundColor: disabled
          ? colors.lightgrey
          : backgroundColor || colors.background,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: getResponsiveSize(spacing.small),
        flexDirection: "row",
      }}
    >
      <TextComponents
        text={textButton || ""}
        color={textColor}
        type={textType}
      />
      {loading && (
        <View style={{ marginStart: getResponsiveSize(spacing.tiny) }}>
          <ActivityIndicator color={colors.white} />
        </View>
      )}
    </Pressable>
  );
}
