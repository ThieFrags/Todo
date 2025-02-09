import {ITask} from "@shared/interface/todo";
import {addTasks} from "@entities/store";
import {useCreateTaskUseCase} from "@entities/cases/to-do/create-task/use-case";

export const useCreateTaskPresenter = () => {
  const {mutateAsync} = useCreateTaskUseCase()

  const handleSumbit = async (port:Omit<ITask, 'id'>) => {
    const savedTask = await mutateAsync(port)

    addTasks(savedTask)
  }

  return {handleSumbit}
}
