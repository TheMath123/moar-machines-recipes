import React from 'react';
import Image from 'next/image';
import { CraftingGrid } from './crafting-grid';
import { formatName } from '@/utils/format-name';
import { recipes } from '@/assets/recipes';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip';

interface RecipeDisplayProps {
  id: string;
}

export function RecipeDisplay({ id }: RecipeDisplayProps) {
  const recipe = recipes[id]
  const formatedId = formatName(id);
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold mb-4 text-foreground">Recipe</h2>

      <div className='flex flex-col gap-6'>
        <CraftingGrid pattern={recipe.pattern} keys={recipe.key} />

        <div className="flex flex-col gap-2 p-2 items-center">
          <TooltipProvider key={`item-recipe-result`}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className="p-2 border dark:border-gray-600 border-gray-400 bg-gray-400 flex items-center justify-center rounded-md"
                >
                  <Image
                    src={`https://minecraft-api.vercel.app/images/items/item_frame.png`}
                    alt={formatedId}
                    className="w-12 h-12"
                    width={40}
                    height={40}
                  />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{formatName(id)}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>


          <span className="text-lg text-foreground">{formatName(recipe.result.components.item_name.fallback)}</span>
        </div>
      </div>
    </div>
  );
};
