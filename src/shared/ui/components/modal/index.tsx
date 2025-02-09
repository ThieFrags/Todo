import {ComponentPropsWithoutRef, FC} from "react";
import {makeClassname} from "@shared/utils";
import {modalStyles} from "@shared/ui/components/modal/style.ts";
import {EModalKey} from "@shared/enum";
import {closeModal} from "@shared/utils/modal";

interface ImodalProps extends ComponentPropsWithoutRef<'dialog'> {
  id: EModalKey;
}
export const Modal: FC<ImodalProps> = ({className, children, id, ...props}) => {

  return (
    <dialog className={makeClassname(modalStyles(), className)} id={id} {...props}>
      <div className={""}>
        {children}
      </div>
      <button
        className={"cursor-pointer"}
        type="button"
        onClick={() => closeModal(id)}
      >
        <span className="button__text font-sans w-full text-xl" >Закрыть</span>
      </button>
    </dialog>
  )
}

