import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddressSaved, Dashboard } from 'models';
import { DashboardService } from 'services';
import { storeData } from 'storage';

export interface GlobalState {
  loading: boolean;
  homeFocused: boolean;
  dashboardData: Dashboard;
  addressSaved: AddressSaved;
}

const initialState: GlobalState = {
  loading: false,
  homeFocused: true,
  dashboardData: {
    restaurants: [],
    categories: [],
    favorites: [],
  },
  addressSaved: {
    address: '',
    coords: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
    aditionalInfo: '',
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

const saveAddressStorage = async (value: any) => {
  await storeData('addressSaved', value);
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    // Utilizado para el flujo de reiniciar animación del header
    setHomeFocused: (state, action) => {
      state.homeFocused = action.payload;
    },
    setAddress: (state, action) => {
      state.addressSaved = action.payload;
    },
    saveAddress: (state, action) => {
      state.addressSaved = action.payload;
      saveAddressStorage(action.payload);
    },
  },
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

export const { setHomeFocused, saveAddress, setAddress } = globalSlice.actions;

export default globalSlice.reducer;
