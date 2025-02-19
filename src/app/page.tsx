'use client'

import * as React from 'react';
import { RecipeDisplay } from './components/recipe-display';
import { recipes } from '@/assets/recipes';
import { formatName } from '@/utils/format-name';
import { Recipe } from '@/@types/recipe';
import Link from 'next/link';

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = React.useState<Recipe>(recipes.bedrock_breaker);

  return (
    <main className="flex flex-col items-center justify-between p-4 h-dvh gap-4">
      <header className='flex flex-col gap-1 items-center'>
        <h1 className="text-2xl font-bold">Moar Machines Recipes</h1>
        <h2 className="text-sm font-semibold">Minecraft Version: 1.21.3</h2>
      </header>

      <section className='flex flex-col items-center gap-4 grow'>
        <div className='space-x-4'>
          <label htmlFor="select-block" className='font-medium'>Machine</label>
          <select
            id='select-block'
            onChange={(e) => setSelectedRecipe(recipes[e.target.value])}
            className="p-4 border border-foreground/10 bg-background rounded-md"
          >
            {Object.keys(recipes).map((key) => (
              <option key={key} value={key}>
                {formatName(key)}
              </option>
            ))}
          </select>
        </div>

        <RecipeDisplay recipe={selectedRecipe} />
      </section>

      <footer className='flex flex-col gap-4 items-center text-sm'>
        <nav className='flex gap-4 justify-centers items-center'>
          <Link
            href={'https://wasdbuildteam.website/data-packs/machines'}
            target='_blank'
          >
            Machines Datapack
          </Link>
          <Link
            href={'https://wasdbuildteam.website'}
            target='_blank'
          >
            Author
          </Link>
        </nav>
        <div className='flex flex-col gap-1 max-w-md'>
          <p className='text-gray-700 dark:text-gray-400'>
            <span className='font-semibold'>Disclaimer: </span>
            This website is not affiliated with the author or the development team of the datapack available at WASD Build Team. All credits for the creation and development of the datapack belong to its respective creators.
          </p>
        </div>
        <span className='font-medium'>
          Make with ♥️ by {" "}
          <Link
            href='https://grngroup.net'
            target='_blank'
            className='font-semibold text-green-600'
          >
            Greens Group
          </Link>
        </span>
      </footer>
    </main>
  );
};
