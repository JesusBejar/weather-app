import fetch from "node-fetch";

const routeHola = () => "Hola Mundo!";

const routeAPInombres = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    return error;
  }
  const names = data
    .map((user) => `id: ${user.id}, name:${user.name}`)
    .join("<br>");
  return names;
};

export { routeHola, routeAPInombres };
