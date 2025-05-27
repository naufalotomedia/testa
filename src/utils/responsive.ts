import { Dimensions } from "react-native";

export const getResponsiveSize = (size: number) => {
  const { width } = Dimensions.get("window");
  const scale = width / 375;

  return size * scale;
};
