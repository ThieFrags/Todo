import {EPriorityTask, EAreaTask} from "@shared/enum";

export type ITask = {
  id: string,
  taskName: string;
  statusState: EAreaTask;
  deadLine: Date;
  priority: EPriorityTask;
  isComplete: boolean;
}

export type IGroupTaskList = {
  priority: EPriorityTask,
  tasks: ITask[],
}