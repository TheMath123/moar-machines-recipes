import { ItemName } from "./item-name";
import { Lore } from "./lore";

export interface Recipe {
  type: string; // Type of the recipe (e.g., "minecraft:crafting_shaped")
  group: string; // Group the recipe belongs to (e.g., "wasd_machines")
  pattern: string[]; // Crafting pattern (e.g., ["###", "OSO", "#D#"])
  key: { [key: string]: string }; // Mapping of characters to item IDs (e.g., { "#": "minecraft:obsidian" })
  result: {
    count: number; // Quantity of the resulting item
    id: string; // ID of the resulting item (e.g., "minecraft:item_frame")
    components: {
      item_name: ItemName; // Parsed JSON object for the item name
      lore: Lore[]; // Array of parsed JSON objects for the item lore
      custom_data: {
        [key: string]: unknown; // Custom data associated with the item (e.g., { "wasd_custom_machine": 1 })
      };
      entity_data: {
        id: string; // Entity ID (e.g., "minecraft:item_frame")
        Tags: string[]; // Entity tags (e.g., ["wasd.machine_block", ...])
        Facing: number; // Entity facing direction (e.g., 1)
        Invulnerable: number; // Whether the entity is invulnerable (e.g., 1)
        Invisible: number; // Whether the entity is invisible (e.g., 1)
        Fixed: number; // Whether the entity is fixed (e.g., 1)
      };
      "minecraft:item_model": string; // Item model (e.g., "wasd:machine/bedrock_breaker")
    };
  };
}
