// export const authMiddleware = ({getState}: any) => (next: any) => (action: any) => {
//   localStorage.setItem('applicationState',  JSON.stringify(getState()))
//   return next(action);
// };

export const authMiddleware = ({ getState }: any) => {
  return (next: any) => (action: any) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};

export const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState") || "{}");
  }
};
