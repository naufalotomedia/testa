import { httpGet, httpPost } from "@utils/server";

export const fetchDashboardData = async (token: string) => {
  let response = await httpGet("api/page/dashboard", token);
  return response;
};

export const fetchDataLeavePermission = async (token: string) => {
  let response = await httpGet(`api/leave_permission_dummy`, token);
  return response;
};

export const fetchRequestData = async (token: string) => {
  let response = await httpGet("api/requests", token);
  return response;
};

export const fetchTrackingData = async (id: number, token: string) => {
  let response = await httpGet(
    "api/tracking/dashboard_tracking_gps/" + id,
    token
  );
  return response;
};