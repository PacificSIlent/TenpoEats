import { API } from 'config/env.json';
import axiosHelper from 'helpers/axios.helper';
import { Dashboard } from 'models';

class DashboardService {
  static getDashboardData(): Promise<any> {
    const headers = {
      ...API.DASHBOARD.GET_DASHBOARD_DATA.HEADERS,
    };
    const url = `${API.DASHBOARD.URL_BASE}${API.DASHBOARD.GET_DASHBOARD_DATA.ENDPOINT}`;
    return axiosHelper()
      .get(url, { headers })
      .then((response) => Promise.resolve<Dashboard>(response.data))
      .catch((error) => {
        throw error;
      });
  }
}
export default DashboardService;
