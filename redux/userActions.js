export const updateUser = (userId, newName, newAge) => ({
  type: "UPDATE_USER",
  payload: { userId, newName, newAge },
});

export const removeUser = (userId) => ({
  type: "REMOVE_USER",
  payload: userId,
});
