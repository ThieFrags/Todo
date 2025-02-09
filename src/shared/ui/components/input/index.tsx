import React, {ComponentPropsWithoutRef, FC} from 'react';
import {makeClassname} from "@shared/utils";

type IInputProps = ComponentPropsWithoutRef<'input'>

export const Input: FC<IInputProps> = ({className, ...props}) => (
  <input {...props} className={makeClassname("flex-1 min-w-[200px] pr-4", className)} />
);

