const initialState = {
  users: [
    { id: 1, name: "mike", age: 45 },
    { id: 2, name: "John", age: 34 },
    { id: 3, name: "Joseph", age: 26 },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                name: action.payload.newName,
                age: action.payload.newAge,
              }
            : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
