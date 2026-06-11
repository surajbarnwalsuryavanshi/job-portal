import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: {
    applicants: null,
  },
  reducers: {
    setAllApplications: (state, action) => {
      state.applicants = action.payload;
    },
  },
});

export const { setAllApplications } = applicationSlice.actions;
export default applicationSlice.reducer;
export { applicationSlice };
