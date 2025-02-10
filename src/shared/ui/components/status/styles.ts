import {cva} from "class-variance-authority";
import {EAreaTask} from "@shared/enum";

export const statusStyles =
  cva('text-tertiary font-normal font-sans px-4 py-1 rounded-full', {
    variants: {
      color: {
        [EAreaTask.Work]: 'bg-status-progress',
        [EAreaTask.Home]: 'bg-status-complete',
        [EAreaTask.Studying]: 'bg-status-pending',
      }
    }
  });