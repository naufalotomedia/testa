import React from "react";
import { spacing } from "@utils/spacing";
import { colors } from "@utils/color";
import TextComponents from "./text";
import { getResponsiveSize } from "@utils/responsive";
import Animated, {
  Keyframe,
  ReduceMotion,
  runOnJS,
  runOnUI,
} from "react-native-reanimated";

export default function Snackbar({
  visible,
  text,
}: {
  visible: boolean;
  text: string;
}) {
  const enteringAnimation = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateY: 100 }],
    },
    50: {
      opacity: 0.5,
      transform: [{ translateY: 50 }],
    },
    100: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
  }).duration(200);

  const exitAnimation = new Keyframe({
    0: {
      opacity: 1,
      transform: [{ translateY: 0 }],
    },
    50: {
      opacity: 0.5,
      transform: [{ translateY: 50 }],
    },
    100: {
      opacity: 0,
      transform: [{ translateY: 100 }],
    },
  }).duration(200);

  return (
    <>
      {visible && (
        <Animated.View
          entering={enteringAnimation}
          exiting={exitAnimation}
          style={{
            padding: getResponsiveSize(10),
            backgroundColor: "#363636",
            position: "absolute",
            marginVertical: spacing.normal,
            marginHorizontal: "5%",
            width: "90%",
            borderRadius: spacing.tiny,
            justifyContent: "center",
            bottom: spacing.normal,
          }}
        >
          <TextComponents text={text} fontSize={13} color={colors.white} />
        </Animated.View>
      )}
    </>
  );
}
