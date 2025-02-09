import {EPriorityTask, EProgressTask} from "@shared/enum";

export type ITask = {
  id: string,
  taskName: string;
  statusState: EProgressTask;
  deadLine: Date;
  priority: EPriorityTask;
}

export type IGroupTaskList = {
  priority: EPriorityTask,
  tasks: ITask[],
}