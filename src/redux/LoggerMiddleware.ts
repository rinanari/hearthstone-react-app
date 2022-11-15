import { Middleware } from "@reduxjs/toolkit";
export const LoggerMiddleware: Middleware = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prevState", store.getState());
  console.log("action", action);
  next(action);
  console.log("prevState", store.getState());
  console.groupEnd();
  return result;
};
