import { View, StyleSheet } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { colors } from "@utils/color";
import TextComponents from "@components/text";
import { Icons } from "@utils/icons";

export default function TabBarComponent({
  state,
  descriptors,
  navigation,
}: any) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            {label === "AbsensiScreen" ? (
              isFocused ? (
                <Icons.absensi width={18} height={18} />
              ) : (
                <Icons.absensiOff width={18} height={18} />
              )
            ) : label === "DashboardScreen" ? (
              isFocused ? (
                <Icons.dashboard width={18} height={18} />
              ) : (
                <Icons.dashboardOff width={18} height={18} />
              )
            ) : label === "LainnyaScreen" ? (
              isFocused ? (
                <Icons.lainnya width={18} height={18} />
              ) : (
                <Icons.lainnyaOff width={18} height={18} />
              )
            ) : isFocused ? (
              <Icons.profile width={18} height={18} />
            ) : (
              <Icons.profileOff width={18} height={18} />
            )}
            <View style={{ marginTop: 2 }}>
              <TextComponents
                text={label?.replace("Screen", "")}
                fontSize={12}
                color={isFocused ? colors.orange : colors.lightgrey}
                type={isFocused ? "medium" : "regular"}
              />
            </View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: colors.background,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
