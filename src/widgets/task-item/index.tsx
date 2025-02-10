import {taskItemStyles} from './styles'
import {ComponentPropsWithoutRef, ReactNode, useState} from "react";
import {makeClassname} from "@shared/utils";
import {Status} from "@shared/ui/components/status";
import {CheckBox} from "@shared/ui/components/checkbox";
import {ITask} from "@shared/interface/todo";
import {useSaveTaskPresenter} from "@entities/cases/to-do/save-task/presenter";
import {Trash2} from "lucide-react";
import {Input} from "@shared/ui/components";
import {ru} from 'date-fns/locale'
import DatePicker from "react-datepicker";
import {useDeleteTaskPresenter} from "@entities/cases/to-do/delete-task/presenter";

interface IItemDetailsProps extends ComponentPropsWithoutRef<'li'> {
  task: ITask,
}

export const ItemDetails = ({className, task,...props}: IItemDetailsProps):ReactNode => {
  const {statusState} = task
  const [form, setForm] = useState<Omit<ITask, 'id'>>(task)
  const {handleSumbit} = useSaveTaskPresenter()
  const { handleSumbit:handleDelete } = useDeleteTaskPresenter()
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSumbit({
        ...task,
        taskName: form.taskName,
      })
    }
  }

  const dateChange = (date: Date | null) => {
    setForm(prev => ({...prev, deadLine: date || new Date()}))
    void handleSumbit({
      ...task,
      deadLine: date || new Date(),
    })
  }

  const approvedChange = (bool: boolean) => {
    setForm(prev => ({...prev, isComplete: bool}))
    void handleSumbit({
      ...task,
      isComplete: bool,
    })
  }

  return (
    <li  className={makeClassname(taskItemStyles(), className)} {...props}>
      <label className="flex gap-2">
        <CheckBox checked={form.isComplete} onToggle={approvedChange}/>
        <Input value={form.taskName} onChange={(event) => setForm(prev => ({...prev, taskName: event.target.value}))}
          onKeyDown={handleKeyDown}/>
      </label>
      <DatePicker dateFormat="d MMMM, yyyy" locale={ ru as unknown as string } className={"border text-center"} wrapperClassName={'self-center'} selected={form.deadLine} onChange={dateChange}/>

      <Status className="text-center" color={statusState}>{statusState}</Status>
      <Trash2 className="flex ml-7 cursor-pointer" onClick={() => handleDelete(task)}/>
    </li>
  );
};
