const reservedItems: { [key: string]: string } = {
  "#fences": "oak_fence",
  "#planks": "oak_planks",
};

function formatId(id: string) {
  const formattedId = id.replace("minecraft:", "");

  if (Object.keys(reservedItems).includes(formattedId)) {
    return reservedItems[formattedId];
  }
  console.log("aqui1");
  return formattedId;
}

export { formatId };
