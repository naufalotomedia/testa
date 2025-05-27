export const helperNavigationPush = (navigation, route, params) => {
  navigation.push(route, {
    params: params,
  });
};

export const helperNavigationReplace = (navigation, route) => {
  navigation.replace(route);
};

export const helperNavigationPushSpecific = (navigation, root, route) => {
  navigation.navigate(root, { screen: route });
};

export const helperNavigationBack = (navigation) => {
  navigation.goBack();
};

export const helperNavigationNested = (navigation, route, child, params) => {
  navigation.navigate(route, {
    screen: child,
    params: params,
  });
};
