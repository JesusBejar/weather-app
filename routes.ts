import fetch from "node-fetch";

// only annote function's parameters and return types
const routeHola = (): string => "Hola Mundo!";

const routeAPInombres = async (): Promise<string> => {
  const url = "https://jsonplaceholder.typicode.com/users";
  // what is a responseItemType?
  let data: responseItemType[];
  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (error) {
    return error as string;
  }
  const names = data
    .map((user) => `id: ${user.id}, name:${user.name}`)
    .join("<br>");
  return names;
};
