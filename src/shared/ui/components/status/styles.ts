import {cva} from "class-variance-authority";
import {EProgressTask} from "@shared/enum";

export const statusStyles =
  cva('text-tertiary font-normal font-sans px-4 py-1 rounded-full', {
    variants: {
      color: {
        [EProgressTask.InProgress]: 'bg-status-progress',
        [EProgressTask.Completed]: 'bg-status-complete',
        [EProgressTask.Pending]: 'bg-status-pending',
      }
    }
  });