import {EModalKey, EPriorityTask, EProgressTask} from "@shared/enum";
import {Modal} from "@shared/ui/components/modal";
import {useCreateTaskPresenter} from "@entities/cases/to-do/create-task/presenter";
import {useState} from "react";
import {ITask} from "@shared/interface/todo";

const CreateModalTask = () => {
  const {handleSumbit} = useCreateTaskPresenter()
  const [form, setForm] = useState<Omit<ITask, 'id'>>(({
    taskName:'',
    deadLine:'',
    priority:EPriorityTask.Low,
    statusState:EProgressTask.Pending,
  }))


  return (
    <Modal id={EModalKey.Add}>
      <form onSubmit={handleSumbit}>
        <input className="flex-1 min-w-[200px] pr-4" value={inputTask} onChange={(event) =>
          (setInputTask(event.target.value))} onKeyDown={handleKeyDown}/>
      </form>

    </Modal>
  );
};

export default CreateModalTask;