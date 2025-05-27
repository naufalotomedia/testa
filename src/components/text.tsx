import { Text } from "react-native";
import React from "react";
import { getResponsiveSize } from "@utils/responsive";
import { colors } from "@utils/color";

interface TextComponentsProps {
  text: string;
  fontSize?: number;
  color?: string;
  type?: string;
  textAlign?: "left" | "right" | "center" | "justify";
  numberOfLines?: number;
  subText?: string;
  subTextColor?: string;
}

export default function TextComponents({
  text,
  fontSize,
  color,
  type,
  textAlign,
  numberOfLines,
  subText,
  subTextColor,
}: TextComponentsProps) {
  return (
    <Text
      style={{
        fontFamily: type
          ? type === "regular"
            ? "Poppins-Regular"
            : type === "bold"
            ? "Poppins-Bold"
            : "Poppins-Medium"
          : "Poppins-Regular",
        fontSize: fontSize || getResponsiveSize(14),
        color: color || colors.black,
        textAlign: textAlign ? textAlign : "left",
      }}
      numberOfLines={numberOfLines}
    >
      {text}{" "}
      <Text
        style={{
          fontFamily: type
            ? type === "regular"
              ? "Poppins-Regular"
              : type === "bold"
              ? "Poppins-Bold"
              : "Poppins-Medium"
            : "Poppins-Regular",
          color: subTextColor,
        }}
      >
        {subText}
      </Text>
    </Text>
  );
}
