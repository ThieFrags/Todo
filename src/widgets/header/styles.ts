import {cva} from "class-variance-authority";
export const headerStyles =
  cva('w-full border-b border-gray-400')

export const itemList =
  cva('font-sans py-4 text-2xl font-medium gap-8 grid grid-cols-[1fr_200px_160px_80px] px-4 justify-center items-center')

export const item =
  cva('first:text-start first:grow h-full text-center')
