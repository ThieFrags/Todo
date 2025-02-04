import {ITask} from "@shared/interface/todo";
import globalStore from "@entities/store";
import {useCreateTaskUseCase} from "@entities/cases/to-do/create-task/use-case";

export const useSaveTaskPresenter = () => {
  const {mutateAsync} = useCreateTaskUseCase()

  const handleSumbit = async (port:Omit<ITask, 'id'>) => {
    const savedTask = await mutateAsync(port)

    globalStore.setState((prev) => ({...prev, tasks: [...prev.tasks, savedTask]}))
  }

  return {handleSumbit}
}
