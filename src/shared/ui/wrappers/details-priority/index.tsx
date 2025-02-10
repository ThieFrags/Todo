import {ComponentPropsWithoutRef, FC, useState} from "react";
import {ChevronDown} from "lucide-react";
import {chevronDownStyles, summaryStyles} from "@shared/ui/wrappers/details-priority/styles.tsx";

interface IDetailsProps extends ComponentPropsWithoutRef<'details'> {
  title: string;
}

export const Details: FC<IDetailsProps> = ({className, title, children,...props}) => {
  const [open, setOpen] = useState(true);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpen((prevState) => !prevState)
  }

  return (
      <details  open={open} className= {className} {...props}>
        <summary onClick={handleClick} className={summaryStyles()}>
          <ChevronDown className={chevronDownStyles({open})} size={16} strokeWidth={1.75} />
          <span>{title}</span>
        </summary>
        {children}
      </details>
  );
};