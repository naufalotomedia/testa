import { Pressable } from "react-native";
import React, { ReactNode } from "react";
import { colors } from "@utils/color";

interface CardComponentsProps {
  children: ReactNode;
  margin?: number;
  padding?: number;
  borderRadius?: number;
  marginHorizontal?: number;
  height?: number;
  style?: any;
  onPress?: () => void;
}

export default function CardComponents({
  children,
  margin,
  padding,
  borderRadius,
  marginHorizontal,
  height,
  style,
  onPress,
}: CardComponentsProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          height: height || "auto",
          margin: margin || 0,
          marginHorizontal: marginHorizontal,
          padding: padding || 0,
          borderRadius: borderRadius || 0,
          backgroundColor: colors.white,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}
