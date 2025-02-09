import {taskItemStyles} from './styles'
import {ComponentPropsWithoutRef, ReactNode, useState} from "react";
import {makeClassname} from "@shared/utils";
import {Status} from "@shared/ui/components/status";
import {CheckBox} from "@shared/ui/components/checkbox";
import {ITask} from "@shared/interface/todo";
import {useSaveTaskPresenter} from "@entities/cases/to-do/save-task/presenter";
import {Trash2} from "lucide-react";
import {Input} from "@shared/ui/components";
import {format} from "date-fns";

interface IItemDetailsProps extends ComponentPropsWithoutRef<'li'> {
  task: ITask,
}

export const ItemDetails = ({className, task,...props}: IItemDetailsProps):ReactNode => {
  const {taskName, statusState, deadLine} = task
  const [inputTask, setInputTask] = useState(taskName)
  const {handleSumbit} = useSaveTaskPresenter()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSumbit({
        ...task,
        taskName: inputTask,
      })
    }
  }

  return (
    <li  className={makeClassname(taskItemStyles(), className)} {...props}>
      <label className="flex gap-2">
        <CheckBox/>
        <Input value={inputTask} onChange={(event) =>
          (setInputTask(event.target.value))} onKeyDown={handleKeyDown}/>
      </label>
      <p className="w-[130px]">
        {format(deadLine, "dd/MM/yyyy")}
      </p>
      <Status className="text-center" color={statusState}>{statusState}</Status>
      <Trash2 className="flex ml-7 cursor-pointer"/>
    </li>
  );
};
