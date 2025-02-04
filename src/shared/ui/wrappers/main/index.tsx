import {mainWrappresStyles} from './styles.ts'
import {ComponentPropsWithoutRef, FC} from "react";
import {makeClassname} from "@shared/utils";
type IDivProps = ComponentPropsWithoutRef<'div'>

const MainWrapper: FC<IDivProps> = ({className, ...props}) => {
  return (
    <div className={makeClassname(mainWrappresStyles(), className)} {...props}/>

  );
};

export default MainWrapper;