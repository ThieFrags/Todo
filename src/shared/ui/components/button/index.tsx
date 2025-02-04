import {buttonStyles} from './styles.ts'
import {ComponentPropsWithoutRef, FC} from "react";
import {makeClassname} from "@shared/utils";
type IButtonProps = ComponentPropsWithoutRef<'button'>

const Button: FC<IButtonProps> = ({className, ...props}) => {
  return (
    <button className={makeClassname(buttonStyles(), className)} {...props}/>

  );
};

export default Button;