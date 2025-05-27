import { httpGet, httpPost } from "@utils/server";

export const fetchLoginUser = async (data: any) => {
  let body = {
    email: data?.username,
    password: data?.password,
  };

  let response = await httpPost("api/auth/login", body);
  return response;
};

export const fetchPersonalData = async (data: any, token: string) => {
  let response = await httpGet("api/employee/" + data, token);
  return response;
};
