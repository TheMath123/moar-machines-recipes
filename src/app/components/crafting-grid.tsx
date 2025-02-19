import React from 'react';
import Image from 'next/image';
import { formatName } from '@/utils/format-name';

interface CraftingGridProps {
  pattern: string[];
  keys: { [key: string]: string };
}

export function CraftingGrid({ pattern, keys }: CraftingGridProps) {
  return (
    <div className="flex flex-col gap-2">
      {pattern.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.split('').map((char, colIndex) => {
            const id = keys[char] ? keys[char].replace('minecraft:', '') : '';
            return (
              <div
                key={colIndex}
                className="w-12 h-12 border border-gray-500 bg-gray-400 flex items-center justify-center">
                {keys[char] ? (
                  <Image
                    src={`https://minecraft-api.vercel.app/images/items/${id}.png`}
                    alt={formatName(id)}
                    width={40}
                    height={40}
                    className="w-10 h-10 text-xs break-words text-gray-950 text-center flex items-center justify-center"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}