import { configureStore } from "@reduxjs/toolkit";

const initialData = {
  selected:1,
  data:[
    { id:1, name:"Alex Brown", email:"", age:25 },
    { id:2, name:"Dafna Korski", email:"dafna@yahoo.com", age:32 },
    { id:3, name:"Maksim Kozhukh", email:"mkozhukh@spam.com", age:27 },
  ]
};

export function userInfoReducer(state = initialData, action) {
  switch (action.type) {
  case "SET_USER_INFO":
    const newData = [...state.data];
    newData[state.selected] = action.payload;
    return {...state, data: newData};

  case "SELECT_USER":
    return {...state, selected:action.payload - 1};

  default:
    return state;
  }
}

export const setUserInfo = (value) => {
  return {
    type: "SET_USER_INFO",
    payload:value,
  }
}

export const selectUser = (id) => {
  return {
    type: "SELECT_USER",
    payload:id,
  }
}

export const store = configureStore({reducer: userInfoReducer});