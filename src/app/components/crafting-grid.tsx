import React, { useState } from 'react';
import Image from 'next/image';
import { formatName } from '@/utils/format-name';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/tooltip';
import { formatId } from '@/utils/format-id';

interface CraftingGridProps {
  pattern: string[];
  keys: { [key: string]: string };
}

export function CraftingGrid({ pattern, keys }: CraftingGridProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: { png: boolean; gif: boolean } }>({});

  const handleImageError = (id: string, extension: string) => {
    setImageErrors((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [extension]: true,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-2">
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.split('').map((char, colIndex) => {
            const id = keys[char] ? formatId(keys[char]) : '';
            console.log('id', id);
            const hasPngError = imageErrors[id]?.png || false;
            const hasGifError = imageErrors[id]?.gif || false;
            const extension = hasPngError ? 'gif' : 'png';
            const imageUrl = `https://minecraft-api.vercel.app/images/items/${id}.${extension}`;

            if (!keys[char]) {
              return <div
                key={colIndex}
                className="w-12 h-12 border dark:border-gray-600 border-gray-400 bg-gray-400 flex items-center justify-center rounded-md"
              ></div>
            }

            if (hasPngError && hasGifError) {
              return (
                <TooltipProvider
                  key={`item-recipe-${colIndex}`}
                  disableHoverableContent={!keys[char]}
                >
                  <Tooltip>
                    <TooltipTrigger disabled={!keys[char]}>
                      <div
                        key={colIndex}
                        className="w-12 h-12 border dark:border-gray-600 border-gray-400 bg-gray-400 flex items-center justify-center rounded-md"
                      >
                        <Image
                          src="https://minecraft-api.vercel.app/images/items/barrier.png"
                          alt="Barrier"
                          aria-label="Barrier"
                          width={40}
                          height={40}
                          className="w-10 h-10 text-xs break-words dark:text-gray-950 text-center flex items-center justify-center"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{formatName(id)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            }

            return (
              <TooltipProvider
                key={`item-recipe-${colIndex}`}
              >
                <Tooltip>
                  <TooltipTrigger disabled={!keys[char]}>
                    <div
                      key={colIndex}
                      className="w-12 h-12 border dark:border-gray-600 border-gray-400 bg-gray-400 flex items-center justify-center rounded-md"
                    >
                      {keys[char] ? (
                        <Image
                          src={imageUrl}
                          alt={formatName(id)}
                          aria-label={formatName(id)}
                          width={40}
                          height={40}
                          className="w-10 h-10 text-xs break-words dark:text-gray-950 text-center flex items-center justify-center"
                          onError={() => handleImageError(id, extension)}
                        />
                      ) : null}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{formatName(id)}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      ))}
    </div>
  );
}