import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  videoSource: string;
  startTime: number;
  endTime: number;
  videoDuration: number;
}

const initialState: VideoState = {
  videoSource: "",
  startTime: 0,
  endTime: 100,
  videoDuration: 100,
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setTrimPoints: (
      state,
      action: PayloadAction<{ startTime: number; endTime: number }>
    ) => {
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
    },

    setVideoSource: (
      state,
      action: PayloadAction<{ source: string; videoDuration: number }>
    ) => {
      state.videoSource = action.payload.source;
      state.videoDuration = action.payload.videoDuration;
    },

    resetTrimPoints: (state) => {
      state.startTime = 0;
      state.endTime = state.videoDuration;
    },
  },
});

export const { setTrimPoints, setVideoSource, resetTrimPoints } =
  videoSlice.actions;
export default videoSlice.reducer;
