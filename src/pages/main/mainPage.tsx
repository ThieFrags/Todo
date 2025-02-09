import Header from "@widgets/header";
import {Details} from "@shared/ui/wrappers/details-priority";
import {ItemDetails} from "@widgets/task-item";
import MainWrapper from "@shared/ui/wrappers/main";
import {useGetTaskListPresenter} from "src/entities/cases/to-do/get-list/presenter";
import {useEffect} from "react";
import globalStore from "@entities/store";
import {Modal} from "src/shared/ui/components/modal";
import {EModalKey} from "@shared/enum";

const MainPage = () => {

  const {groupedTaskList} = useGetTaskListPresenter()
  useEffect(() => {
    console.log(globalStore.state.taskLists)
  }, [globalStore.state.taskLists])

  return (
    <MainWrapper className="min-w-[1200px] w-full">
      <Header />
      {groupedTaskList?.map((group) => (
        <Details title={group.priority}>
          {group.tasks.map(item =>
            <ItemDetails task={item}/>
          )}
        </Details>
      ))}

    </MainWrapper>
  );
};

export default MainPage;