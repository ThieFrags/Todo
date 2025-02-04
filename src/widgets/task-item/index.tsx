import {taskItemStyles} from './styles'
import {ComponentPropsWithoutRef, ReactNode, useState} from "react";
import {makeClassname} from "@shared/utils";
import {Status} from "@shared/ui/components/status";
import {CheckBox} from "@shared/ui/components/checkbox";
import {ITask} from "@shared/interface/todo";
import {useSaveTaskPresenter} from "@entities/cases/to-do/save-task/presenter";

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
      <CheckBox/>
      <input className="flex-1 min-w-[200px] pr-4" value={inputTask} onChange={(event) =>
        (setInputTask(event.target.value))} onKeyDown={handleKeyDown}/>
      <p className="w-[130px]">
        {deadLine}
      </p>
      <Status color='progress'>{statusState}</Status>
    </li>
  );
};
