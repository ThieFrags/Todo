import {useCreateTaskUseCase} from "@entities/cases/to-do/create-task/use-case";

export const useCreateTaskPresenter = () => {
  const {mutateAsync} = useCreateTaskUseCase()

  return {handleSubmit: mutateAsync}
}
