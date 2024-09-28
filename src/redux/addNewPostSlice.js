import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fieldList: [
    "Pharagraph",
    // "Signature",
    // "Photo",
    // "Pharagraph",
    // "Devider",
    // "Pharagraph",
    // "NumberList",
    // "BulletList",
  ],
};

const addNewPostSlice = createSlice({
  name: "addNewPostSlice",
  initialState,
  reducers: {
    removeField: (state, action) => {
      state.fieldList.splice(action.payload, 1);
    },
    addField: (state, action) => {
      state.fieldList.push(action.payload);
      state.fieldList = [...state.fieldList];
    },
  },
});

export const { removeField, addField } = addNewPostSlice.actions;

export default addNewPostSlice.reducer;
