import {EPriorityTask} from "@shared/enum";

export type ITask = {
  id: string,
  taskName: string;
  statusState: string;
  deadLine: string;
  priority: EPriorityTask;
}

export type IGroupTaskList = {
  priority: EPriorityTask,
  tasks: ITask[],
}