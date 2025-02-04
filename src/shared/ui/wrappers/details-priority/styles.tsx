import {cva} from "class-variance-authority";

export const summaryStyles =
  cva('flex flex-row items-center gap-2 cursor-pointer')

export const chevronDownStyles =
  cva('', {
    variants: {
      open: {
        true: 'transition duration-200 ease-in-out',
        false: 'transition duration-200 ease-in-out -rotate-90',
      }
    }
  })
