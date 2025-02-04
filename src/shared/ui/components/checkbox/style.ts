import {cva} from "class-variance-authority";
import {makeClassname} from "@shared/utils";

export const checkboxStyles = cva(makeClassname(
    'flex items-center justify-center cursor-pointer appearance-none ',
    'relative w-8 h-8 p-1 border-1 rounded-full transition duration-200 ease-in-out'
  ),
  {
    variants: {
      checked: {
        true: 'bg-status-complete text-white',
        false: 'border-gray-300 text-gray-300',
      }
    }
  }
)
