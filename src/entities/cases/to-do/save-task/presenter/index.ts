import {useSaveTaskUseCase} from "@entities/cases/to-do/save-task/use-case";
import {ITask} from "@shared/interface/todo";
import {updateTask} from "@entities/store";

export const useSaveTaskPresenter = () => {
  const {mutateAsync} = useSaveTaskUseCase()

  const handleSumbit = async (task: ITask) => {
    const savedTask = await mutateAsync(task)

    updateTask(savedTask)
  }

  return {handleSumbit}
}
