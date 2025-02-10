import {useDeleteTaskUseCase} from "@entities/cases/to-do/delete-task/use-case";

export const useDeleteTaskPresenter = () => {
  const {mutateAsync} = useDeleteTaskUseCase()
  return {handleSumbit:mutateAsync}
}
