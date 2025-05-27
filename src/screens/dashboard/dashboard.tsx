import HeaderComponents from "@components/header";
import { colors } from "@utils/color";
import * as React from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Dashboard from "./children/dashboard";
import LeavePermission from "./children/leave-permission";
import RequestUi from "./children/request";
import TrackingGps from "./children/tracking-gps";

const renderScene = SceneMap({
  dashboard: Dashboard,
  leave: LeavePermission,
  request: RequestUi,
  track: TrackingGps,
});

export default function DashboardScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "dashboard", title: "Dashboard" },
    { key: "leave", title: "Leave Permissions" },
    { key: "request", title: "Request" },
    { key: "track", title: "Tracking GPS" },
  ]);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={true}
      indicatorStyle={{ backgroundColor: colors.orange }}
      style={{ backgroundColor: colors.white }}
      activeColor={colors.orange}
      inactiveColor={colors.lightgrey}
    />
  );

  return (
    <>
      <HeaderComponents title="Dashboard" />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}
