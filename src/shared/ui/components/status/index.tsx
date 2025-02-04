import {statusStyles} from './styles'
import {ComponentPropsWithoutRef, FC} from "react";
import {makeClassname} from "@shared/utils";
import {VariantProps} from "class-variance-authority";

type IStatusProps = ComponentPropsWithoutRef<'span'> & VariantProps<typeof statusStyles>

export const Status: FC<IStatusProps> = ({className, color,...props}) => {
  return (
    <span  className={makeClassname(statusStyles({color}), className)} {...props}/>

  );
};