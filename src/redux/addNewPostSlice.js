import { createSlice } from "@reduxjs/toolkit";
import {
  BULLETLIST,
  DEVIDER,
  NUMBERLIST,
  PHARAGRAPH,
  PHOTO,
  SIGNATURE,
} from "../utils/newPostSchema";

const initialState = {
  fieldList: [PHARAGRAPH],
};

const addNewPostSlice = createSlice({
  name: "addNewPostSlice",
  initialState,
  reducers: {
    removeField: (state, action) => {
      state.fieldList.splice(action.payload, 1);
    },

    addField: (state, action) => {
      switch (action.payload) {
        case "PHOTO":
          state.fieldList.push(PHOTO);
          break;
        case "DEVIDER":
          state.fieldList.push(DEVIDER);
          break;

        case "SIGNATURE":
          state.fieldList.push(SIGNATURE);
          break;
        case "NUMBERLIST":
          state.fieldList.push(NUMBERLIST);
          break;
        case "BULLETLIST":
          state.fieldList.push(BULLETLIST);
          break;

        default:
          state.fieldList.push(PHARAGRAPH);
          break;
      }
      state.fieldList = [...state.fieldList];
    },

    inputData: (state, action) => {
      const { index } = action.payload;

      state.fieldList.splice(index, 1, action.payload.data);
    },
  },
});

export const { removeField, addField, inputData } = addNewPostSlice.actions;

export default addNewPostSlice.reducer;
