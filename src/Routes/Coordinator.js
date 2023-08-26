export const goToHome = (navigate) => {
  navigate("/");
};

export const goToPokedex = (navigate) => {
  navigate(`/pokedex`);
};

export const goToDetail = (navigate, name) => {
  navigate(`/detail/${name}`);
};
