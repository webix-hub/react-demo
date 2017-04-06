var initialData = {
  selected:1,
  data:[
    { id:1, name:"Alex Brown", email:"", age:25 },
    { id:2, name:"Dafna Korski", email:"dafna@yahoo.com", age:32 },
    { id:3, name:"Maksim Kozhukh", email:"mkozhukh@spam.com", age:27 }
  ]
};

export function userInfo(state = initialData, action) {
  switch (action.type) {
  case 'SET_USER_INFO':
    var copy1 = window.webix.copy(state);
    Object.assign(copy1.data[copy1.selected], action.value);
    return copy1;

  case 'SELECT_USER':
    var copy2 = window.webix.copy(state);
    copy2.selected = action.id-1
    return copy2;

  default:
    return state;
  }
}

export const setUserInfo = (value) => {
  return {
    type: 'SET_USER_INFO',
    value
  }
}

export const selectUser = (id) => {
  return {
    type: 'SELECT_USER',
    id
  }
}