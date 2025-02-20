import Header from "@widgets/header";
import {Details} from "@shared/ui/wrappers/details-priority";
import {ItemDetails} from "@widgets/task-item";
import MainWrapper from "@shared/ui/wrappers/main";
import {useGetTaskListPresenter} from "src/entities/cases/to-do/get-list/presenter";
import {useEffect} from "react";
import globalStore from "@entities/store";
import CreateModalTask from "@features/create-task-modal";

const MainPage = () => {

  const {groupedTaskList} = useGetTaskListPresenter()
  useEffect(() => {
    console.log(globalStore.state.taskLists)
  }, [globalStore.state.taskLists])

  return (
    <MainWrapper className="min-w-[1300px] w-full">
      <Header />
      {groupedTaskList?.map((group) => (
        <Details title={group.priority} key={group.priority}>
          {group.tasks.map(item =>
            <ItemDetails task={item} key={item.id}/>
          )}
        </Details>
      ))}
      <CreateModalTask />
    </MainWrapper>
  );
};

export default MainPage;