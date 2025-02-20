import { capitalize } from "./string";

function formatName(name: string) {
  if (!name) return "";
  let str = name.replaceAll("_", " ");
  str = str.replaceAll(".", " ");
  str = capitalize(str);
  return str;
}

export { formatName };
