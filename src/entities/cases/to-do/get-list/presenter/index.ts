import {useGetTasksListUseCase} from "src/entities/cases/to-do/get-list/use-case";
import globalStore from "@entities/store";

export const useGetTaskListPresenter = () => {
  const {data} = useGetTasksListUseCase()

  return {data, groupedTaskList: globalStore.state.taskLists}
}