import {cva} from "class-variance-authority";

export const statusStyles =
  cva('text-tertiary font-normal font-sans px-4 py-1 rounded-full', {
    variants: {
      color: {
        progress: 'bg-status-progress',
        complete: 'bg-status-complete',
        pending: 'bg-status-pending',
      }
    }
  });