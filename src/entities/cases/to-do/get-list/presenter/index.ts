import {useGetTasksListUseCase} from "src/entities/cases/to-do/get-list/use-case";
import globalStore, {addTasks} from "@entities/store";

export const useGetTaskListPresenter = () => {
  const {data} = useGetTasksListUseCase()
  addTasks(data ?? [])
  return {data, groupedTaskList: globalStore.state.taskLists}
}