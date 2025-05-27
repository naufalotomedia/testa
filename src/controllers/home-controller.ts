import { fetchDashboardData } from "@api/home.api";
import {
  setDataDashboard,
  toggleLoadingDashboard,
} from "@redux/slice/dashboard.slice";
import { useEffect } from "react";

export const initDashboard = async (
  dispatch: Function,
  user: { access_token: string }
) => {
  useEffect(() => {
    async function prepare() {
      dispatch(toggleLoadingDashboard());

      let response = await fetchDashboardData(user?.access_token);
      console.log(response);
      
      if (response?.success) {
        dispatch(setDataDashboard(response?.data));
      }

      dispatch(toggleLoadingDashboard());
    }

    if (user?.access_token) {
      prepare();
    }
  }, [user]);
};
