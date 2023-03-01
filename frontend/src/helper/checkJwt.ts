const hasJwt = () => {
  if (localStorage.getItem("user")) {
    const user = JSON.parse(localStorage.getItem("user") || "");

    if (user) {
      return user.token;
    } else {
      return false;
    }
  }
};

export default hasJwt;
