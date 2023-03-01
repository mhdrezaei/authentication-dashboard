import hasJwt from "./checkJwt";

export const authHeader = () => {
  const token = hasJwt();
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};
