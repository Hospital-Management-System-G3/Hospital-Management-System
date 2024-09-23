// // src/slices/doctorAvailabilitySlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchDoctorAvailability = createAsyncThunk(
//   'doctorAvailability/fetchDoctorAvailability',
//   async (doctorId, { rejectWithValue }) => {
//     try {
//       const doctorId = 65;
//       const response = await axios.get(`http://localhost:5000/api/doctors/${doctorId}/availabilities`);
//       console.log(response.data)
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const doctorAvailabilitySlice = createSlice({
//   name: 'doctorAvailability',
//   initialState: {
//     availabilities: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDoctorAvailability.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDoctorAvailability.fulfilled, (state, action) => {
//         state.loading = false;
//         state.availabilities = action.payload;
//       })
//       .addCase(fetchDoctorAvailability.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
    
//   },
// });

// export default doctorAvailabilitySlice.reducer;