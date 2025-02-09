import {cva} from "class-variance-authority";

export const modalStyles =
  cva('open:flex flex-col w-[300px] border p-7 box-border open:backdrop:bg-black/75 m-auto')