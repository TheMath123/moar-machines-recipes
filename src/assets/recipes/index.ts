import { Recipe } from "@/@types/recipe"; // Import the Recipe interface
import bedrock_breaker from "./bedrock_breaker.json";
import breaker from "./breaker.json";
import chunk_loader from "./chunk_loader.json";
import compactor from "./compactor.json";
import composter from "./composter.json";
import crusher from "./crusher.json";
import extruder from "./extruder.json";
import fan from "./fan.json";
import farmer from "./farmer.json";
import fluid_pipe from "./fluid_pipe.json";
import fluid_tank from "./fluid_tank.json";
import ore_extruder from "./ore_extruder.json";
import oxidizer from "./oxidizer.json";
import pearl_thrower from "./pearl_thrower.json";
import placer from "./placer.json";
import rotator from "./rotator.json";
import saturator from "./saturator.json";
import sifter from "./sifter.json";
import sprinkler from "./sprinkler.json";
import stripper from "./stripper.json";
import trash_can from "./trash_can.json";
import washer from "./washer.json";
import { RawRecipe } from "@/@types/raw-recipe";
import { ItemName } from "@/@types/item-name";
import { Lore } from "@/@types/lore";

// Função para corrigir JSON inválido
const fixInvalidJson = (jsonString: string): string => {
  return jsonString.replace(/:(\w+)(,|\})/g, ':"$1"$2');
};

// Função de parsing segura
const parseJsonSafely = (jsonString: string): unknown => {
  const fixedJson = fixInvalidJson(jsonString); // Corrige o JSON antes de fazer o parsing
  return JSON.parse(fixedJson);
};

// Função para converter RawRecipe em Recipe
const parseRecipe = (recipe: RawRecipe): Recipe => {
  return {
    ...recipe,
    result: {
      ...recipe.result,
      components: {
        ...recipe.result.components,
        item_name: parseJsonSafely(
          recipe.result.components["minecraft:item_name"]
        ) as ItemName,
        lore: recipe.result.components["minecraft:lore"].map((lore: string) =>
          parseJsonSafely(lore)
        ) as Lore[],
        custom_data: {},
      },
    },
  };
};
// Define the recipes object with parsed JSON strings
const recipes: Record<string, Recipe> = {
  bedrock_breaker: parseRecipe(bedrock_breaker),
  breaker: parseRecipe(breaker),
  chunk_loader: parseRecipe(chunk_loader),
  compactor: parseRecipe(compactor),
  composter: parseRecipe(composter),
  crusher: parseRecipe(crusher),
  extruder: parseRecipe(extruder),
  fan: parseRecipe(fan),
  farmer: parseRecipe(farmer),
  fluid_pipe: parseRecipe(fluid_pipe),
  fluid_tank: parseRecipe(fluid_tank),
  ore_extruder: parseRecipe(ore_extruder),
  oxidizer: parseRecipe(oxidizer),
  pearl_thrower: parseRecipe(pearl_thrower),
  placer: parseRecipe(placer),
  rotator: parseRecipe(rotator),
  saturator: parseRecipe(saturator),
  sifter: parseRecipe(sifter),
  sprinkler: parseRecipe(sprinkler),
  stripper: parseRecipe(stripper),
  trash_can: parseRecipe(trash_can),
  washer: parseRecipe(washer),
};

export { recipes };
