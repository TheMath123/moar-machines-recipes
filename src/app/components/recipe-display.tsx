import React from 'react';
import Image from 'next/image';
import { CraftingGrid } from './crafting-grid';
import { Recipe } from '@/@types/recipe';
import { formatId } from '@/utils/format-id';
import { formatName } from '@/utils/format-name';

interface RecipeDisplayProps {
  recipe: Recipe;
}

export function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  const id = formatId(recipe.result.id)
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold mb-4 text-foreground">Recipe</h2>

      <div className='flex flex-col gap-6'>
        <CraftingGrid pattern={recipe.pattern} keys={recipe.key} />

        <div className="flex flex-col gap-2 p-2 items-center">
          <Image
            src={`https://minecraft-api.vercel.app/images/items/${id}.png`}
            alt={id}
            className="w-16 h-16 p-2 border border-gray-500 bg-gray-400 flex items-center justify-center"
            width={40}
            height={40}
          />

          <span className="text-lg text-foreground">{formatName(recipe.result.components.item_name.fallback)}</span>
        </div>
      </div>
    </div>
  );
};
