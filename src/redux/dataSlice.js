import { createSlice } from "@reduxjs/toolkit";
import { beUnique } from "../general/components/header";

const initialState = {
  allDatas: [],
  selectedDatas: [],
  likedDatas: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    giveAllDatas(state, { payload }) {
      state.allDatas.push(payload);
    },
    giveSelectedDatas(state, { payload }) {
      state.selectedDatas.push(payload);
    },
    giveLikedDatas(state, { payload }) {
      if (payload.id) state.likedDatas.push(payload);
      else payload.forEach((e) => state.likedDatas.push(e));
      state.likedDatas = beUnique(state.likedDatas);
      saveToLocal("save", payload);
    },
    increaseCount(state, { payload }) {
      const index = state.selectedDatas.findIndex((e) => e.id === payload);
      state.selectedDatas[index].count = state.selectedDatas[index].count + 1;
    },
    decreaseCount(state, { payload }) {
      const index = state.selectedDatas.findIndex((e) => e.id === payload);
      if (state.selectedDatas[index].count - 1 !== 0) {
        state.selectedDatas[index].count = state.selectedDatas[index].count - 1;
      } else if (state.selectedDatas[index].count - 1 === 0)
        state.selectedDatas = state.selectedDatas.filter(
          (e) => e.id !== payload
        );
    },
    removeLikedDatas(state, { payload }) {
      state.likedDatas = state.likedDatas.filter((e) => e.id !== payload);
      saveToLocal("remove", payload);
    },
  },
});
export default dataSlice;

function saveToLocal(type, data) {
  let oldDatas = JSON.parse(localStorage.getItem("likedDatas")) || [];
  oldDatas = oldDatas.filter((e) => e.id);
  if (type === "save") {
    oldDatas.push(data);
    localStorage.setItem("likedDatas", JSON.stringify(oldDatas));
  } else {
    localStorage.setItem(
      "likedDatas",
      JSON.stringify(oldDatas.filter((e) => e.id !== data))
    );
  }
}
