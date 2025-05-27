import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "@utils/color";
import { spacing } from "@utils/spacing";
import TextComponents from "@components/text";
import { formatTanggal, formatUang } from "@utils/format-data";
import { Icons } from "@utils/icons";
import CardComponents from "@components/card";
import { initDashboard } from "@controllers/home-controller";

const datasets = [
  {
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
];

export default function Dashboard() {
  const data = useSelector((state: any) => state.dashboard.data);
  const loading = useSelector((state: any) => state.dashboard.loading);
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useDispatch();

  initDashboard(dispatch, user);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={colors.orange} />
      </View>
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colors.background }}
      data={[]}
      renderItem={null}
      ListEmptyComponent={
        <>
          <View style={{ height: spacing.small }} />

          <CardComponents
            margin={spacing.small}
            padding={spacing.small}
            borderRadius={spacing.tiny}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 70,
                alignItems: "center",
                paddingHorizontal: spacing.normal,
              }}
            >
              <View style={{ flex: 1 }}>
                <TextComponents text={`Day Month ${"\n"}Year`} type="medium" />
              </View>
              <View style={{ flex: 1 }}>
                <TextComponents
                  text={formatTanggal(new Date().toDateString())}
                  textAlign="right"
                  type="medium"
                />
              </View>
            </View>
          </CardComponents>

          <CardComponents
            marginHorizontal={spacing.small}
            padding={spacing.small}
            borderRadius={spacing.tiny}
          >
            <View
              style={{
                height: 70,
                paddingHorizontal: spacing.normal,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <TextComponents text="Sales Goal" type="medium" />
                <TextComponents
                  text={`${data?.total_sales || ""}`}
                  type="medium"
                />
              </View>
              <Icons.eiges width={60} height={60} />
            </View>
          </CardComponents>

          <CardComponents
            margin={spacing.small}
            padding={spacing.small}
            borderRadius={spacing.tiny}
          >
            <View
              style={{
                height: 70,
                paddingHorizontal: spacing.normal,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <TextComponents text="Monthly sales" type="medium" />
                <TextComponents
                  text={
                    data?.montly_sales
                      ? formatUang(data?.montly_sales)
                      : formatUang(0)
                  }
                  type="medium"
                />
              </View>
              <Icons.eiges width={60} height={60} />
            </View>
          </CardComponents>

          <CardComponents
            margin={spacing.small}
            padding={spacing.small}
            borderRadius={spacing.tiny}
          >
            <View
              style={{
                height: 70,
                paddingHorizontal: spacing.normal,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <TextComponents text="Target Remaining" type="medium" />
                <TextComponents
                  text={
                    data?.remaining_sales
                      ? formatUang(data?.remaining_sales)
                      : formatUang(0)
                  }
                  type="medium"
                />
              </View>
              <Icons.eiges width={60} height={60} />
            </View>
          </CardComponents>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <CardComponents
                margin={spacing.small}
                padding={spacing.small}
                borderRadius={spacing.tiny}
              >
                <View
                  style={{
                    height: 70,
                    paddingHorizontal: spacing.normal,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <TextComponents text="New Clients" type="medium" />
                    <TextComponents
                      text={`${data?.clients || 0} +${data?.new_clients || 0}`}
                      type="medium"
                    />
                  </View>
                </View>
              </CardComponents>
            </View>

            <View style={{ flex: 1 }}>
              <CardComponents
                margin={spacing.small}
                padding={spacing.small}
                borderRadius={spacing.tiny}
              >
                <View
                  style={{
                    height: 70,
                    paddingHorizontal: spacing.normal,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <TextComponents text="Vendor" type="medium" />
                    <TextComponents
                      text={`${data?.vendor || 0} +${data?.new_vendor || 0}`}
                      type="medium"
                    />
                  </View>
                </View>
              </CardComponents>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <CardComponents
                margin={spacing.small}
                padding={spacing.small}
                borderRadius={spacing.tiny}
              >
                <View
                  style={{
                    height: 70,
                    paddingHorizontal: spacing.normal,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <TextComponents text="Products" type="medium" />
                    <TextComponents
                      text={`${data?.product || 0} +${data?.new_product || 0}`}
                      type="medium"
                    />
                  </View>
                </View>
              </CardComponents>
            </View>

            <View style={{ flex: 1 }}>
              <CardComponents
                margin={spacing.small}
                padding={spacing.small}
                borderRadius={spacing.tiny}
              >
                <View
                  style={{
                    height: 70,
                    paddingHorizontal: spacing.normal,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <TextComponents text="Recent" type="medium" />
                    <TextComponents text="Access Product" type="medium" />
                  </View>
                </View>
              </CardComponents>
            </View>
          </View>

          <View style={{ margin: spacing.small }}>
            <TextComponents text="Sales Overview" type="medium" />
          </View>

          <View style={{ alignItems: "center" }}>
            <LineChart
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: datasets,
              }}
              width={Dimensions.get("window").width * 0.95}
              height={220}
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: colors.white,
                backgroundGradientFrom: colors.white,
                backgroundGradientTo: colors.white,
                decimalPlaces: 2,
                color: (opacity = 1) => colors.orange,
                labelColor: (opacity = 1) => colors.orange,
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
              }}
            />
          </View>
        </>
      }
    />
  );
}
