import { capitalize } from "./string";

function formatName(name: string) {
  return capitalize(name.replaceAll(/_/g, " ").replaceAll(".", " "));
}

export { formatName };
