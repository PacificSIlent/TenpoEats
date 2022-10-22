import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Dashboard } from 'models';
import { DashboardService } from 'services';

export interface GlobalState {
  loading: boolean;
  dashboardData: Dashboard;
}

const initialState: GlobalState = {
  loading: false,
  dashboardData: {
    restaurants: [],
    categories: [],
    favorites: [],
  },
};

/** Functions */
export const getDashboardData = createAsyncThunk(
  'global/getDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await DashboardService.getDashboardData();
      return response;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data);
    }
  },
);

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      const dashboardData: Dashboard = action.payload as Dashboard;
      state.loading = false;
      state.dashboardData = { ...dashboardData };
    });
    builder.addCase(getDashboardData.rejected, (state) => {
      state.loading = false;
      state.dashboardData = initialState.dashboardData;
    });
  },
});

export default globalSlice.reducer;
