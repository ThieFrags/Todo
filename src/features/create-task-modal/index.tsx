import {EModalKey, EPriorityTask, EProgressTask} from "@shared/enum";
import {Modal} from "@shared/ui/components/modal";
import {useCreateTaskPresenter} from "@entities/cases/to-do/create-task/presenter";
import {useState} from "react";
import {ITask} from "@shared/interface/todo";
import {Input} from "@shared/ui/components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@shared/ui/components/button";

const CreateModalTask = () => {
  const {handleSubmit} = useCreateTaskPresenter()
  const [form, setForm] = useState<Omit<ITask, 'id'>>(({
    taskName:'',
    deadLine: new Date(),
    priority:EPriorityTask.Low,
    statusState:EProgressTask.Pending,
  }))

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void handleSubmit(form)
  }

  return (
    <Modal id={EModalKey.Add} className={'size-[500px]'}>
      <form onSubmit={submit}>

        <p className={"font-sans w-full text-xl text-center"}>Опишите задание</p>
        <Input value={form.taskName} onChange={(event) => setForm(prev => ({...prev, taskName: event.target.value}))}/>

        <DatePicker selected={form.deadLine} onChange={(date) => setForm(prev => ({...prev, deadLine: date || new Date()}))}/>

        <select value={form.statusState} onChange={(event) => setForm(prev => ({...prev, statusState: event.target.value as EProgressTask}))}>
          {Object.values(EProgressTask).map((item) => <option key={item}>{item}</option> )}
        </select>

        <select value={form.priority} onChange={(event) => setForm(prev => ({...prev, priority: event.target.value as EPriorityTask}))}>
          {Object.values(EPriorityTask).map((item) => <option key={item}>{item}</option> )}
        </select>

        <Button className={"font-sans text-xl text-center text-black"} type={'submit'}>Создать задание</Button>
      </form>
    </Modal>
  );
};

export default CreateModalTask;