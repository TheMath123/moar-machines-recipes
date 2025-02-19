export interface Lore {
  fallback: string; // Fallback text (e.g., "Crushes blocks into other blocks...")
  translate: string; // Translation key (e.g., "wasd.machines.crusher.lore")
  italic?: boolean; // Whether the text is italic (optional)
  color?: string; // Text color (optional, e.g., "blue")
}
