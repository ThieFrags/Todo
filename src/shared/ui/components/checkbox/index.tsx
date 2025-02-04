import {ComponentPropsWithoutRef, FC, useState} from "react";
import {VariantProps} from "class-variance-authority";
import {Check} from "lucide-react";
import {checkboxStyles} from "@shared/ui/components/checkbox/style.ts";


interface ICheckBoxProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'>, VariantProps<typeof checkboxStyles> {
  checked?: boolean
  onToggle?: (checked: boolean) => void
}
export const CheckBox: FC<ICheckBoxProps> = ({className, onToggle, onChange, checked: initialChecked = false,  ...props})=> {
  const [checked, setChecked] = useState(initialChecked)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {target: {checked: checkedInput}} = event
    void onChange?.(event)
    void onToggle?.(checkedInput)

    setChecked(checkedInput)
  }

  return (
    <label>
      <input {...props} type={'checkbox'} checked={checked} onChange={handleChange} className="sr-only"/>
      <Check className={checkboxStyles({checked})}/>
    </label>
  )
}
